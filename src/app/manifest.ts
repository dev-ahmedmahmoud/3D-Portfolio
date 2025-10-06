import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

const manifest = async (): Promise<MetadataRoute.Manifest> => {
  const t = await getTranslations("metadata");

  return {
    name: "Ahmed Portfolio",
    short_name: "Ahmed",
    description: t("description"),
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#915EFF",
    icons: [
      {
        src: "/imgs/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/imgs/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/imgs/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/imgs/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/imgs/favicon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/imgs/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/imgs/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/imgs/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
};

export default manifest;
