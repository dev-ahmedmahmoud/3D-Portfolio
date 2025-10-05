import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/utils/animations/motion";

interface IAnimatedSectionHeadProps {
  readonly headline: string;
  readonly subHeadline?: string;
  readonly introduction?: string;
}

const AnimatedSectionHead = ({
  headline,
  subHeadline,
  introduction,
}: IAnimatedSectionHeadProps) => (
  <>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...textVariant(0.1)}
    >
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        {headline}
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {subHeadline}
      </h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        {...fadeIn(undefined, "", 0.1, 1)}
      >
        {introduction}
      </motion.p>
    </div>
  </>
);

export default AnimatedSectionHead;
