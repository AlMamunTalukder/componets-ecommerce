import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export const Hero4 = () => {
  const slides = [
    {
      id: 1,
      image: "/img/hero4/1.webp",
      title: "Bedroom Chair",
      subtitle: "Bedroom Chair",      
      link: "/shop/s25-ultra"
    },
    {
      id: 2,
      image: "/img/hero4/2.webp",
     title: "Length Wooden Mirror",
      subtitle: "Length Wooden Mirror",
      link: "/shop/audio"
    },
    {
      id: 3,
      image: "/img/hero4/3.webp",
      title: "Make House to Home",
      subtitle: "Make House to Home",
      link: "/shop/audio"
    },
   
  ]

  return (
    <div className="h-auto w-full overflow-hidden bg-[#f0f0f0]">
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
            <div className="relative flex min-h-[500px] w-full items-center lg:h-[650px]">
              
              {/* The Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover lg:object-contain"
              />

              {/* THE TEXT OVERLAY CONTENT */}
              <div className="absolute inset-0 z-10 flex items-center">
                <div className="container mx-auto px-6 lg:px-20">
                  <div className=" space-y-4 text-center">
                    <h1 className="text-4xl font-black tracking-tighter text-slate-900 lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="text-lg font-medium text-slate-600 lg:text-2xl">
                      {slide.subtitle}
                    </p>
                    <div className="pt-4">
                      <a
                        href={slide.link}
                        className="inline-block rounded-full bg-slate-900 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
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
              background: #000 !important; 
              opacity: 0.3;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px !important;
              border-radius: 4px !important;
              background: #4F0187 !important; 
            }
          `,
        }}
      />
    </div>
  )
}