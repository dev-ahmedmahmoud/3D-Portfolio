import { useMessages, useTranslations } from "next-intl";
import {
  arvr,
  creator,
  mobile,
  person,
  projectPortfolio,
  syncology,
  unitedprint,
  upwork,
  web,
  xr,
} from "@/assets";
import type { IExperience, IProject, ITestimonial } from "@/types";

type ContentSection =
  | "navbar"
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "testimonials"
  | "contact";

export interface INavbarItem {
  name: string;
  link: string;
}

interface IContent {
  headline: string;
  subHeadline: string;
  introduction?: string;
}

export interface INavbarContent extends IContent {
  headline: string;
  items: INavbarItem[];
}

export interface IHeroContent {
  textual: string[];
}

export interface IAboutContent extends IContent {
  services: {
    title: string;
    icon: string;
  }[];
}

export interface IExperienceContent extends IContent {
  experiences: IExperience[];
}

export interface IProjectsContent extends IContent {
  projects: IProject[];
}

export interface ITestimonialsContent extends IContent {
  testimonials: ITestimonial[];
}

export interface IContactContent extends IContent {
  contactSuccess: string;
  contactFail: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitButtonIdle: string;
  submitButtonLoading: string;
  nameInvalid: string;
  emailInvalid: string;
  messageInvalid: string;
}

interface ContentReturnType {
  ():
    | IAboutContent
    | INavbarContent
    | IHeroContent
    | IExperienceContent
    | IProjectsContent
    | ITestimonialsContent
    | IContactContent;
}

export const useContent = (section: ContentSection): ContentReturnType => {
  const t = useTranslations(section);
  const messages = useMessages();

  const getNavbarContent = (): INavbarContent => {
    const navbarContentKeys = Object.keys(messages.navbar).splice(1);
    return {
      headline: t("mastery"),
      subHeadline: "",
      items: navbarContentKeys.map((key: string) => ({
        name: t(key),
        link: key,
      })),
    };
  };

  const getHeroContent = (): IHeroContent => {
    const heroContentKeys = Object.keys(messages.hero);
    return {
      textual: heroContentKeys.map((key: string) => t(key)),
    };
  };

  const getAboutContent = (): IAboutContent => {
    return {
      headline: t("introductionHeadline"),
      subHeadline: t("overview"),
      introduction: t("introduction"),
      services: [
        {
          title: t("services.arvr"),
          icon: arvr,
        },
        {
          title: t("services.mr"),
          icon: creator,
        },
        {
          title: t("services.nextjs"),
          icon: web,
        },
        {
          title: t("services.reactNative"),
          icon: mobile,
        },
      ],
    };
  };

  const getExperienceContent = (): IExperienceContent => {
    return {
      headline: t("headline"),
      subHeadline: t("subHeadline"),
      experiences: [
        {
          title: t("experiences.reactAndReactNative.title"),
          date: t("experiences.reactAndReactNative.date"),
          iconBg: "#383E56",
          icon: upwork,
          companyName: t("experiences.reactAndReactNative.companyName"),
          points: [
            t("experiences.reactAndReactNative.points.point1"),
            t("experiences.reactAndReactNative.points.point2"),
            t("experiences.reactAndReactNative.points.point3"),
            t("experiences.reactAndReactNative.points.point4"),
          ],
        },
        {
          title: t("experiences.cto.title"),
          date: t("experiences.cto.date"),
          iconBg: "#E6DEDD",
          icon: syncology,
          companyName: t("experiences.cto.companyName"),
          points: [
            t("experiences.cto.points.point1"),
            t("experiences.cto.points.point2"),
          ],
        },
        {
          title: t("experiences.nextjs.title"),
          date: t("experiences.nextjs.date"),
          iconBg: "#383E56",
          icon: unitedprint,
          companyName: t("experiences.nextjs.companyName"),
          points: [
            t("experiences.nextjs.points.point1"),
            t("experiences.nextjs.points.point2"),
            t("experiences.nextjs.points.point3"),
            t("experiences.nextjs.points.point4"),
          ],
        },
        {
          title: t("experiences.xr.title"),
          date: t("experiences.xr.date"),
          iconBg: "#E6DEDD",
          icon: xr,
          companyName: t("experiences.xr.companyName"),
          points: [
            t("experiences.xr.points.point1"),
            t("experiences.xr.points.point2"),
            t("experiences.xr.points.point3"),
            t("experiences.xr.points.point4"),
          ],
        },
      ],
    };
  };

  const getProjectsContent = (): IProjectsContent => {
    return {
      headline: t("mywork"),
      subHeadline: t("projectsSubheadline"),
      introduction: t("introduction"),
      projects: [
        {
          name: t("projects.3dPortfolio.name"),
          description: t("projects.3dPortfolio.description"),
          tags: [
            {
              name: t("projects.3dPortfolio.tags.tag1"),
              color: "blue-text-gradient",
            },
            {
              name: t("projects.3dPortfolio.tags.tag2"),
              color: "green-text-gradient",
            },
            {
              name: t("projects.3dPortfolio.tags.tag3"),
              color: "pink-text-gradient",
            },
            {
              name: t("projects.3dPortfolio.tags.tag4"),
              color: "orange-text-gradient",
            },
          ],
          image: projectPortfolio,
          source_code_link: "https://github.com/",
        },
      ],
    };
  };

  const getTestimonialsContent = (): ITestimonialsContent => {
    return {
      headline: t("peopleSay"),
      subHeadline: t("testimonialsSubheadline"),
      testimonials: [
        {
          name: t("testimonials.testimonial1.name"),
          designation: t("testimonials.testimonial1.designation"),
          company: t("testimonials.testimonial1.company"),
          body: t("testimonials.testimonial1.body"),
          image: person,
        },
        {
          name: t("testimonials.testimonial2.name"),
          designation: t("testimonials.testimonial2.designation"),
          company: t("testimonials.testimonial2.company"),
          body: t("testimonials.testimonial2.body"),
          image: person,
        },
        {
          name: t("testimonials.testimonial3.name"),
          designation: t("testimonials.testimonial3.designation"),
          company: t("testimonials.testimonial3.company"),
          body: t("testimonials.testimonial3.body"),
          image: person,
        },
      ],
    };
  };

  const getContactContent = (): IContactContent => {
    return {
      headline: t("getInTouch"),
      subHeadline: t("contactSubheadline"),
      contactSuccess: t("contactSuccess"),
      contactFail: t("contactFail"),
      namePlaceholder: t("namePlaceholder"),
      emailPlaceholder: t("emailPlaceholder"),
      messagePlaceholder: t("messagePlaceholder"),
      submitButtonIdle: t("submitButtonIdle"),
      submitButtonLoading: t("submitButtonLoading"),
      nameInvalid: t("nameInvalid"),
      emailInvalid: t("emailInvalid"),
      messageInvalid: t("messageInvalid"),
    };
  };

  const getContent = ():
    | IAboutContent
    | INavbarContent
    | IHeroContent
    | IExperienceContent
    | ITestimonialsContent
    | IProjectsContent
    | IContactContent => {
    switch (section) {
      case "navbar":
        return getNavbarContent();
      case "hero":
        return getHeroContent();
      case "about":
        return getAboutContent();
      case "experience":
        return getExperienceContent();
      case "projects":
        return getProjectsContent();
      case "testimonials":
        return getTestimonialsContent();
      case "contact":
        return getContactContent();
    }
  };

  return getContent as ContentReturnType;
};
