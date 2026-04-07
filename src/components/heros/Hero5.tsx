export const HeroCorporate = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto grid h-auto max-w-7xl grid-cols-1 gap-6 px-6 lg:h-[700px] lg:grid-cols-4 lg:grid-rows-2">
        {/* Main CTA Block - Large Feature */}
        <div className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[3rem] bg-indigo-600 p-10 text-white lg:col-span-2 lg:row-span-2 lg:p-14">
          <div className="relative z-10">
            <span className="mb-6 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
              Limited Time Only
            </span>
            <h1 className="mb-6 text-5xl leading-none font-black tracking-tighter lg:text-8xl">
              UP TO <br /> 50% OFF
            </h1>
            <p className="mb-8 max-w-xs text-lg font-medium text-indigo-100 lg:text-xl">
              Our biggest end-of-season sale starts right now.
            </p>
            <button className="rounded-full bg-white px-10 py-4 text-sm font-black text-indigo-600 uppercase shadow-2xl transition-colors hover:bg-indigo-50">
              Shop The Sale
            </button>
          </div>

          {/* Main Hero Image */}
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
            className="absolute right-0 bottom-0 h-full w-2/3 object-cover opacity-50 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
            alt="Fashion Model"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-transparent to-transparent"></div>
        </div>

        {/* Category 1 - Home Decor */}
        <div className="group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-[3rem] border border-stone-200 bg-stone-100 p-8 lg:col-span-2">
          <div className="relative z-10">
            <h3 className="mb-2 text-3xl font-black text-stone-900">
              Home Decor
            </h3>
            <p className="flex items-center gap-2 font-bold text-stone-500">
              Explore Collection{" "}
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400&auto=format&fit=crop"
            className="absolute top-0 right-0 h-full w-1/2 object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Modern Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-100/20 to-transparent"></div>
        </div>

        {/* Category 2 - Electronics */}
        <div className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[3rem] border border-blue-100 bg-blue-50 p-8">
          <div className="relative z-10">
            <h3 className="text-xl font-black text-blue-900">Tech Gear</h3>
            <span className="text-xs font-bold text-blue-600">
              400+ Products
            </span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop"
            className="z-10 h-32 w-32 self-center object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-125"
            alt="Headphones"
          />

          <div className="relative z-10 flex justify-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-colors group-hover:bg-blue-900">
              →
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-blue-200/50 blur-2xl"></div>
        </div>

        {/* Category 3 - Beauty (Fixed Image Display) */}
        <div className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[3rem] border border-stone-200 bg-[#f4f2f0] p-8">
          <div className="relative z-10">
            <h3 className="text-xl font-black tracking-tight text-stone-900 uppercase">
              Beauty
            </h3>
            <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">
              New Arrivals
            </span>
          </div>

          {/* Beauty Product Image - Simplified to ensure visibility */}
          <div className="relative z-10 flex items-center justify-center py-4">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=400&auto=format&fit=crop"
                className="h-full w-full object-cover"
                alt="Beauty Product"
              />
            </div>
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white shadow-lg transition-all duration-300 group-hover:bg-blue-600">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Abstract background element */}
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white opacity-50 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};