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
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
          <Blurhash
            hash={blurhash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setIsLoaded(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
