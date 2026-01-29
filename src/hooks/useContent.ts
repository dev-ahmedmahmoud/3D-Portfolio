import { useMessages, useTranslations } from "next-intl";
import {
  arvr,
  creator,
  mobile,
  nxp,
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
  | "bentoAbout"
  | "experience"
  | "projects"
  | "testimonials"
  | "contact"
  | "footer";

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

interface BentoAboutTileTexttualContent {
  headText?: string;
  subText: string;
}

export interface IBentoAboutContent {
  tiles: BentoAboutTileTexttualContent[];
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

export interface IFooterContent {
  privacyTitle: string;
  privacySubTitle: string;
  privacyLastUpdatedLabel: string;
  privacyLastUpdated: string;
  privacyPoint1: string;
  privacyPoint2: string;
  privacyPoint3: string;
  privacyPoint4: string;
  privacyPoint5: string;
  privacyPoint6: string;
  privacyPoint7: string;
  privacyPoint8: string;
  privacyPoint9: string;
  privacyPoint10: string;
  termsTitle: string;
  termsSubTitle: string;
  termsLastUpdatedLabel: string;
  termsLastUpdated: string;
  termsPoint1: string;
  termsPoint2: string;
  termsPoint3: string;
  termsPoint4: string;

  allRightsReserved: string;
}

interface ContentReturnType {
  ():
    | IAboutContent
    | IBentoAboutContent
    | INavbarContent
    | IHeroContent
    | IExperienceContent
    | IProjectsContent
    | ITestimonialsContent
    | IContactContent
    | IFooterContent;
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

  const getBentoAboutContent = (): IBentoAboutContent => {
    return {
      tiles: [
        {
          headText: t("tiles.tile1.headText"),
          subText: t("tiles.tile1.subText"),
        },
        {
          headText: t("tiles.tile2.headText"),
          subText: t("tiles.tile2.subText"),
        },
        {
          headText: t("tiles.tile3.headText"),
          subText: t("tiles.tile3.subText"),
        },
        {
          headText: t("tiles.tile4.headText"),
          subText: t("tiles.tile4.subText"),
        },
        {
          subText: t("tiles.tile5.subText"),
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
          title: t("experiences.nxp.title"),
          date: t("experiences.nxp.date"),
          iconBg: "#E6DEDD",
          icon: nxp,
          companyName: t("experiences.nxp.companyName"),
          points: [
            t("experiences.nxp.points.point1"),
            t("experiences.nxp.points.point2"),
          ],
        },
        {
          title: t("experiences.cto.title"),
          date: t("experiences.cto.date"),
          iconBg: "#383E56",
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
          iconBg: "#E6DEDD",
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
          iconBg: "#383E56",
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
          description1: t("projects.3dPortfolio.description1"),
          description2: t("projects.3dPortfolio.description2"),
        },
        {
          name: t("projects.iphone15replica.name"),
          description1: t("projects.iphone15replica.description1"),
          description2: t("projects.iphone15replica.description2"),
        },
        {
          name: t("projects.3DProductModeling.name"),
          description1: t("projects.3DProductModeling.description1"),
          description2: t("projects.3DProductModeling.description2"),
        },
        {
          name: t("projects.showroom.name"),
          description1: t("projects.showroom.description1"),
          description2: t("projects.showroom.description2"),
        },
        {
          name: t("projects.helloXR.name"),
          description1: t("projects.helloXR.description1"),
          description2: t("projects.helloXR.description2"),
        }
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
          image: unitedprint,
        },
        {
          name: t("testimonials.testimonial2.name"),
          designation: t("testimonials.testimonial2.designation"),
          company: t("testimonials.testimonial2.company"),
          body: t("testimonials.testimonial2.body"),
          image: unitedprint,
        },
        {
          name: t("testimonials.testimonial3.name"),
          designation: t("testimonials.testimonial3.designation"),
          company: t("testimonials.testimonial3.company"),
          body: t("testimonials.testimonial3.body"),
          image: nxp,
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

  const getFooterContent = (): IFooterContent => {
    return {
      privacyTitle: t("privacyTitle"),
      privacySubTitle: t("privacySubTitle"),
      privacyLastUpdatedLabel: t("privacyLastUpdatedLabel"),
      privacyLastUpdated: t("privacyLastUpdated"),
      privacyPoint1: t("privacyPoint1"),
      privacyPoint2: t("privacyPoint2"),
      privacyPoint3: t("privacyPoint3"),
      privacyPoint4: t("privacyPoint4"),
      privacyPoint5: t("privacyPoint5"),
      privacyPoint6: t("privacyPoint6"),
      privacyPoint7: t("privacyPoint7"),
      privacyPoint8: t("privacyPoint8"),
      privacyPoint9: t("privacyPoint9"),
      privacyPoint10: t("privacyPoint10"),
      termsTitle: t("termsTitle"),
      termsSubTitle: t("termsSubTitle"),
      termsLastUpdatedLabel: t("termsLastUpdatedLabel"),
      termsLastUpdated: t("termsLastUpdated"),
      termsPoint1: t("termsPoint1"),
      termsPoint2: t("termsPoint2"),
      termsPoint3: t("termsPoint3"),
      termsPoint4: t("termsPoint4"),
      allRightsReserved: t("allRightsReserved"),
    };
  };

  const getContent = ():
    | IAboutContent
    | IBentoAboutContent
    | INavbarContent
    | IHeroContent
    | IExperienceContent
    | ITestimonialsContent
    | IProjectsContent
    | IContactContent
    | IFooterContent => {
    switch (section) {
      case "navbar":
        return getNavbarContent();
      case "hero":
        return getHeroContent();
      case "about":
        return getAboutContent();
      case "bentoAbout":
        return getBentoAboutContent();
      case "experience":
        return getExperienceContent();
      case "projects":
        return getProjectsContent();
      case "testimonials":
        return getTestimonialsContent();
      case "contact":
        return getContactContent();
      case "footer":
        return getFooterContent();
    }
  };

  return getContent as ContentReturnType;
};
