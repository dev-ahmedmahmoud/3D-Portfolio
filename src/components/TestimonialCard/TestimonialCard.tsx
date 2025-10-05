import { motion } from "framer-motion";
import type { ITestimonial } from "@/types";
import { fadeIn } from "@/utils/animations/motion";
import Image from "../Image/Image";

interface ITestimonialCardProps {
  testimonial: ITestimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: ITestimonialCardProps) => {
  const { name, designation, company, image } = testimonial;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...fadeIn(undefined, "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>

      <div className="flex flex-col flex-1 justify-between mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {testimonial.body}
        </p>

        <div
          id="testFooter"
          className="mt-7 flex justify-between items-center gap-1"
        >
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <Image
            src={image}
            alt={`feedback_by-${name}`}
            tailWindWidth={"w-10"}
            tailWindHeight={"h-10"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
