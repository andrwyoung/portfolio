import { useState } from "react";
import { Blurhash } from "react-blurhash";
import Image from "next/image";
import { ImageType } from "@/config-files/project-images";

type BlurhashImageProps = {
  image: ImageType;
  className?: string;
};

export function BlurhashImage({ image, className = "" }: BlurhashImageProps) {
  const { src, alt, height, width, blurhash } = image;

  const [isLoaded, setIsLoaded] = useState(false);
  const aspectRatio = (height / width) * 100;

  return (
    <div
      className={`relative w-full overflow-clip ${className}`}
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      <div
        className="absolute inset-0 rounded-sm overflow-hidden"
        style={{
          opacity: isLoaded ? 0 : 1,
          transition: `opacity ${isLoaded ? "0.2s ease-in" : "0s ease-out"}`,
        }}
      >
        <Blurhash
          hash={blurhash}
          punch={1}
          width="100%"
          height="100%"
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>

      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setIsLoaded(true)}
        className={`absolute top-0 left-0 w-full h-full`}
      />
    </div>
  );
}
