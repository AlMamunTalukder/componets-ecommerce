import { Swiper, SwiperSlide } from "swiper/react"

// Modules (Must be imported from /modules)
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

export const Hero1 = () => {
  const slides = [
    {
      id: 1,
      title: "PREMIUM",
      subtitle: "HEADPHONE",
      offer: "UP TO 40% OFF",
      image: "/img/hero1/1.webp",
      bgColor: "bg-[#D1118E]", // Matching your image color
    },
    {
      id: 2,
      title: "EXCLUSIVE",
      subtitle: "SMART WATCH",
      offer: "UP TO 20% OFF",
      image: "/img/hero1/2.webp",
      bgColor: "bg-indigo-600",
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
              className={`relative w-full items-center lg:h-full`}
            >
              {/* Main Content Grid */}
              <div className="gap-8 px-6 py-12 lg:grid-cols-2 lg:py-0">
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="h-full w-full "
                />
              </div>
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

// export default Hero1
