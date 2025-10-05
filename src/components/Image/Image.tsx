import NextImage from "next/image";
import type { ImageProps } from "next/image";

interface AdditionalImageProps extends ImageProps {
  tailWindWidth: string;
  tailWindHeight: string;
}

const Image = (props: AdditionalImageProps) => {
  const { tailWindWidth, tailWindHeight, style, ...rest } = props;
  return (
    <div className={`${tailWindWidth} ${tailWindHeight} relative`}>
      <NextImage
        fill
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
        style={{ ...style, objectFit: "cover" }}
        className="rounded-full"
        {...rest}
      />
    </div>
  );
};

export default Image;
