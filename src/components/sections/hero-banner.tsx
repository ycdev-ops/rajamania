"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

export const HeroBanner = () => {
  const banners = [
    { src: 'https://cdn.globalcontentcloud.com/content/8884_64fdd27e04c504.83889662.webp', alt: 'Promo Banner 1', hint: 'casino promotion' },
    { src: 'https://cdn.globalcontentcloud.com/content/8884_64fdd2fb64add7.89065087.webp', alt: 'Promo Banner 2', hint: 'slot game' },
    { src: 'https://cdn.globalcontentcloud.com/promotions/promotion_banner_402_production.jpg', alt: 'Promo Banner 3', hint: 'sports betting' },
  ];

  return (
    <Carousel
        plugins={[
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
        }),
        ]}
        opts={{
        align: 'start',
        loop: true,
        }}
        className="w-full"
    >
        <CarouselContent>
        {banners.map((banner, index) => (
            <CarouselItem key={index}>
            <div className="overflow-hidden rounded-md shadow-lg">
                <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={800}
                    height={300}
                    className="w-full h-auto aspect-[16/6] object-cover"
                    data-ai-hint={banner.hint}
                    priority={index === 0}
                />
            </div>
            </CarouselItem>
        ))}
        </CarouselContent>
    </Carousel>
  );
};
