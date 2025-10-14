import { memo } from "react";
import NextImage from "next/image";
import type { ImageProps } from "next/image";

interface AdditionalImageProps extends ImageProps {
  tailWindWidth: string;
  tailWindHeight: string;
  customImageClass?: string;
  contain?: boolean;
  roundedFull?: boolean;
}

const Image = (props: AdditionalImageProps) => {
  const { tailWindWidth, tailWindHeight, style, customImageClass = "", contain, roundedFull = true, ...rest } = props;
  return (
    <div className={`${tailWindWidth} ${tailWindHeight} relative`}>
      <NextImage
        fill
        className={`${roundedFull ? "rounded-full" : ""} ${customImageClass}`}
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
        style={{ ...style, objectFit: contain ? "contain" : "cover" }}
        {...rest}
      />
    </div>
  );
};

export default memo(Image);
