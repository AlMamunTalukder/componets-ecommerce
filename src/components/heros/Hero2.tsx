import { Swiper, SwiperSlide } from "swiper/react"

// Modules (Must be imported from /modules)
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

export const Hero2 = () => {
  const slides = [
    {
      id: 1,
      image: "/img/hero2/1.webp",
    },
    {
      id: 2,

      image: "/img/hero2/2.webp",
    },
  ]

  return (
    <div className="h-auto w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative flex min-h-[500px] w-full items-center lg:h-[650px]`}
            >
              <img
                src={slide.image}
                alt="img"
                className="h-full w-full transform object-contain "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global Style overrides for Swiper bullets */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
  .swiper-pagination-bullet {
    background: white !important;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 24px !important;
    border-radius: 4px !important;
  }
`,
        }}
      />
    </div>
  )
}
