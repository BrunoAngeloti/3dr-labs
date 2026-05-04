"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export function ProductCarousel({ images, title }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const visibleImages = images.slice(0, 4);

  return (
    <div className="space-y-3">
      <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
        <Image
          src={visibleImages[activeImage]}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {visibleImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {visibleImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`relative aspect-square overflow-hidden rounded-md border transition ${
                activeImage === index
                  ? "border-white/50"
                  : "border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`${title} - foto ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}