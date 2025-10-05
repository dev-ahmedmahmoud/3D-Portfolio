import { useCallback } from "react";
import { germany, us } from "@/assets";
import { useRouter, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "../Image/Image";

const LanguageSwitchArrow = () => {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = useCallback(() => {
    router.push(
      `${locale === routing.locales[0] ? routing.locales[1] : routing.locales[0]}`
    );
  }, []);

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-4 px-4 rounded-full transition"
    >
      <Image
        src={locale === "de" ? us : germany}
        alt={locale === "de" ? "US flag" : "German flag"}
        tailWindWidth={"w-6"}
        tailWindHeight={"h-6"}
      />
    </button>
  );
};

export default LanguageSwitchArrow;
