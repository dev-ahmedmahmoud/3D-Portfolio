import { useTransition } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hocs";
import { slideIn } from "@/utils/animations/motion";
import { sendEmail } from "@/app/actions/sendEmail";
import { Earth3D } from "@/canvas";
import { useContent } from "@/hooks";
import type { IContactContent } from "@/hooks";

const Contact = () => {
  const contactContent = useContent("contact")() as IContactContent;
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.success) {
        toast.success(contactContent.contactSuccess);
      } else {
        toast.error(result.errors?.general?.[0] || contactContent.contactFail);
      }
    });
  };

  return (
    <div
      className={"sm:px-16 px-6 xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        {...slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          {contactContent.headline}
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {contactContent.subHeadline}
        </h3>

        <form action={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="text"
              name="name"
              placeholder={contactContent.namePlaceholder}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="email"
              name="email"
              placeholder={contactContent.emailPlaceholder}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              rows={7}
              name="message"
              placeholder={contactContent.messagePlaceholder}
            />
          </label>

          <button
            type="submit"
            disabled={isPending}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {isPending
              ? contactContent.submitButtonLoading
              : contactContent.submitButtonIdle}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        {...slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Earth3D />
      </motion.div>
    </div>
  );
};

export default SectionWrapper({ Component: Contact, idName: "contact", paddingNoMargin: true });
