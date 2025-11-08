import { memo, useCallback, useState } from "react";
import { Tilt } from "@jdion/tilt-react";
import { Earth3D } from "@/canvas";
import { IBentoAboutContent, useContent } from "@/hooks";
import { SectionWrapper } from "@/hocs";
import { Image } from "@/components";
import { grid1, grid2, grid3, tick, copy, vr } from "@/assets";

const tiles = [
  {
    tiltClassName: "col-span-1 xl:row-span-3",
    media: {
      image: {
        contain: true,
        roundedFull: false,
        src: grid1,
        alt: "overview-grid-1",
        tailWindWidth: "w-full",
        tailWindHeight: "h-[276px]",
      },
    },
    textContent: {
      headText: {
        className: "grid-headtext",
      },
      subText: {
        className: "grid-subtext",
      },
    },
  },
  {
    tiltClassName: "col-span-1 xl:row-span-3",
    media: {
      image: {
        contain: true,
        roundedFull: false,
        src: vr,
        alt: "overview-vr",
        tailWindWidth: "w-full",
        tailWindHeight: "h-[276px]",
      },
    },
    textContent: {
      headText: {
        className: "grid-headtext",
      },
      subText: {
        className: "grid-subtext",
      },
    },
  },
  {
    tiltClassName: "col-span-1 xl:row-span-4",
    media: {
      model3D: <Earth3D />,
      modelWrapperClass:
        "rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center",
    },
    textContent: {
      headText: {
        className: "grid-headtext",
      },
      subText: {
        className: "grid-subtext",
      },
    },
  },
  {
    tiltClassName: "xl:col-span-2 xl:row-span-3",
    media: {
      image: {
        contain: true,
        src: grid2,
        alt: "overview-grid-2",
        tailWindWidth: "w-full",
        tailWindHeight: "h-[266px]",
      },
    },
    textContent: {
      headText: {
        className: "grid-headtext",
      },
      subText: {
        className: "grid-subtext",
      },
    },
  },
  {
    tiltClassName: "xl:col-span-1 xl:row-span-2",
    media: {
      image: {
        customImageClass:
          "!object-contain xxs:object-cover mdlg2:!object-contain  xl:!object-cover object-top",
        roundedFull: false,
        src: grid3,
        alt: "overview-grid-3",
        tailWindWidth: "w-full",
        tailWindHeight: "md:h-[126px] h-[276px]",
      },
    },
    textContent: {
      wrapperClass: "space-y-2",
      subText: {
        className: "grid-subtext text-center",
      },
    },
    copyButton: true,
  },
];

const About = () => {
  const bentoAboutContent = useContent("bentoAbout")() as IBentoAboutContent;
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(" adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, []);

  return (
    <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
      {tiles.map((tile, index) => (
        <Tilt
          key={`tile_${index}`}
          className={tile.tiltClassName}
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
          <div className="grid-container">
            <div className={"grid-container-inner"}>
              {tile.media?.image && (
                <Image
                  roundedFull={tile.media.image.roundedFull}
                  src={tile.media.image.src}
                  contain={tile.media.image.contain}
                  customImageClass={tile.media.image.customImageClass}
                  alt={tile.media.image.alt}
                  tailWindWidth={tile.media.image.tailWindWidth}
                  tailWindHeight={tile.media.image.tailWindHeight}
                />
              )}
              {tile.media?.model3D && (
                <div className={tile.media.modelWrapperClass}>
                  {tile.media.model3D}
                </div>
              )}
              <div className={tile.textContent?.wrapperClass ?? ""}>
                {tile.textContent?.headText && (
                  <p className={tile.textContent.headText.className}>
                    {bentoAboutContent.tiles[index]?.headText}
                  </p>
                )}
                {tile.textContent?.subText && (
                  <p className={tile.textContent.subText.className}>
                    {bentoAboutContent.tiles[index]?.subText}
                  </p>
                )}
                {tile.copyButton && (
                  <button className="copy-container" onClick={handleCopy}>
                    <Image
                      contain
                      src={hasCopied ? tick : copy}
                      alt="tick-copy"
                      tailWindWidth={"w-16"}
                      tailWindHeight={"h-16"}
                    />
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                      a.samyabdelhay@gmail.com
                    </p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

About.displayName = "BentoAbout";

export default SectionWrapper({ Component: memo(About), idName: "about" });
