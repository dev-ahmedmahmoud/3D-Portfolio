import Link from "next/link";
import { Image, Modal } from "@/components";
import { useContent, IFooterContent } from "@/hooks";
import LegalContent from "./Legal";

const socialItems = [
  {
    src: "/assets/github.svg",
    alt: "github",
    link: "https://github.com/dev-ahmedmahmoud",
  },
  {
    src: "/assets/linkedin.svg",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/ahmed-mahmoud-7282b768",
  },
  {
    src: "/assets/instagram.svg",
    alt: "instagram",
    link: "https://www.instagram.com/___ahmed__samy___",
  },
];

const Footer = () => {
  const footerContent = useContent("footer")() as IFooterContent;

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <Modal
          title={footerContent.termsTitle}
          content={
            <LegalContent
              subTitle={footerContent.termsSubTitle}
              lastUpdatedLabel={footerContent.termsLastUpdatedLabel}
              lastUpdated={footerContent.termsLastUpdated}
              points={[
                footerContent.termsPoint1,
                footerContent.termsPoint2,
                footerContent.termsPoint3,
                footerContent.termsPoint4,
              ]}
            />
          }
        />{" "}
        |{" "}
        <Modal
          title={footerContent.privacyTitle}
          content={
            <LegalContent
              subTitle={footerContent.privacySubTitle}
              lastUpdatedLabel={footerContent.privacyLastUpdatedLabel}
              lastUpdated={footerContent.privacyLastUpdated}
              points={[
                footerContent.privacyPoint1,
                footerContent.privacyPoint2,
                footerContent.privacyPoint3,
                footerContent.privacyPoint4,
                footerContent.privacyPoint5,
                footerContent.privacyPoint6,
                footerContent.privacyPoint7,
                footerContent.privacyPoint8,
                footerContent.privacyPoint9,
                footerContent.privacyPoint10,
              ]}
            />
          }
        />
      </div>

      <div className="flex gap-10">
        {socialItems.map((item) => (
          <Link
            key={item.alt}
            href={item.link}
            aria-label="Social Media Link"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              contain
              tailWindWidth="w-6"
              tailWindHeight="h-6"
            />
          </Link>
        ))}
      </div>

      <p className="text-white-500">{footerContent.allRightsReserved}</p>
    </footer>
  );
};

export default Footer;
