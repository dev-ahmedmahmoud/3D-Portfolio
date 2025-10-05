import { getTranslations } from "next-intl/server";

const StructuredData = async () => {
  const t = await getTranslations("metadata");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ahmed",
          url: "https://ahmedmahmoud.de",
          sameAs: [
            "https://github.com/dev-ahmedmahmoud",
            "https://www.linkedin.com/in/ahmed-mahmoud-7282b768",
            "https://x.com/AhmedSa05787736",
          ],
          jobTitle: t("title"),
          worksFor: {
            "@type": "Organization",
            name: "Self-Employed / Freelance"
          },
        }),
      }}
    />
  );
};

export default StructuredData;
