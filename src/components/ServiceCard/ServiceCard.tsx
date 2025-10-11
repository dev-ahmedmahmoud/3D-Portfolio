import { memo } from "react";
import { Tilt } from "@jdion/tilt-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations/motion";
import { Image } from "@/components";

interface IServiceCard {
  cardIndex?: number;
  title?: string;
  icon?: string;
}

const ServiceCard = ({ cardIndex = 0, title, icon }: IServiceCard): JSX.Element => (
  <Tilt
    className="xss:w-[250px] smd:w-[275px] md:w-[300px] mdlg:w-[325px] mdlg2:w-[375px] mdlg3:w-[425px] lgxlg:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
      reverse: false,
      perspective: 1000,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    }}
  >
    <motion.div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...fadeIn("right", "spring", cardIndex * 0.5, 0.75)}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        {!!icon && (
          <Image
            src={icon as string}
            alt="web-development"
            tailWindWidth={"w-16"}
            tailWindHeight={"h-16"}
          />
        )}
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default memo(ServiceCard);
