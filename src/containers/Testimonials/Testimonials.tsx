import { memo } from "react";
import { SectionWrapper } from "@/hocs";
import { AnimatedSectionHead, TestimonialCard } from "@/components";
import { useContent } from "@/hooks";
import type { ITestimonialsContent } from "@/hooks";

const Testimonials = memo(() => {
  const testimonialsContent = useContent(
    "testimonials"
  )() as ITestimonialsContent;

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={
          "bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]"
        }
      >
        <AnimatedSectionHead
          headline={testimonialsContent.headline}
          subHeadline={testimonialsContent.subHeadline}
          introduction={testimonialsContent.introduction}
        />
      </div>
      <div className={"-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7"}>
        {testimonialsContent.testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  );
});

Testimonials.displayName = "Testimonials";

export default SectionWrapper({
  Component: Testimonials,
  idName: "testimonials",
});
