import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/animations/motion";

interface ISectionWrapperProps {
  readonly Component: React.FC;
  readonly idName: string;
  readonly paddingNoMargin?: boolean;
}

const SectionWrapper = ({ Component, idName, paddingNoMargin }: ISectionWrapperProps) =>
  function HOC() {
    return (
      <motion.section
        className={
          `${paddingNoMargin ? "" : "sm:px-16 px-6"} sm:py-16 py-10 ${paddingNoMargin ? "max-w" : "max-w-7xl"} ${paddingNoMargin ? "" : "mx-auto"} relative z-0`
        }
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        {...staggerContainer()}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
