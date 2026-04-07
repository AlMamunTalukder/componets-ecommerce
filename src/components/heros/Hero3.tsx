import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const Hero3 = () => {
  const sliderImages = [
    "/img/hero3/1.webp",
    "/img/hero3/2.webp",
    "/img/hero3/3.webp",
  ]

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-6">
      <div className="grid h-auto grid-cols-1 gap-4 lg:h-[500px] lg:grid-cols-4">
        {/* LEFT SECTION: Main Slider (3 Columns wide) */}
        <div className="group relative overflow-hidden rounded-3xl lg:col-span-3">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="h-full w-full"
          >
            {sliderImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <img
                    src={img}
                    alt="Main Slide"
                    className="h-full w-full object-cover"
                  />
                  {/* Optional Overlay for Text if you add it later */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT SECTION: Two Static Images (1 Column wide) */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          {/* Top Image (Watch) */}
          <div className="relative flex-1 cursor-pointer overflow-hidden rounded-3xl">
            <img
              src="/img/hero3/4.webp"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Watch Pro"
            />
          </div>

          {/* Bottom Image (Earbuds) */}
          <div className="relative flex-1 cursor-pointer overflow-hidden rounded-3xl">
            <img
              src="/img/hero3/5.webp"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Liberty 4 Pro"
            />
          </div>
        </div>
      </div>

      {/* Global CSS to style the pagination dots to match your orange/white theme */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-pagination-bullet {
          width: 30px !important;
          height: 6px !important;
          border-radius: 10px !important;
          background: #fff !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #f97316 !important; /* Tailwind orange-500 */
          opacity: 1 !important;
          width: 45px !important;
        }
      `,
        }}
      />
    </section>
  )
}

export default Hero3
