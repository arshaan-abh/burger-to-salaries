"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Image from "next/image";
import comic1 from "#/comic-1.webp";
import comic2 from "#/comic-2.webp";

const comics = [
  { key: 0, src: comic1, alt: "زن ایرانی در حال خریدن برگر آمریکایی" },
  { key: 1, src: comic2, alt: "زن ایرانی در حال خریدن برگر آمریکایی" },
];

export const MainCarousel = () => {
  return (
    <Carousel
      className="rounded-lg overflow-hidden"
      opts={{ direction: "rtl" }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="-ml-0 h-full">
        {comics.map((comic) => (
          <CarouselItem
            key={comic.key}
            className="pl-0 first:rounded-r-lg last:rounded-l-lg overflow-hidden"
          >
            <Image
              src={comic.src}
              alt={comic.alt}
              className="h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
