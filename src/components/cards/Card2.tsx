import { Heart, ShoppingCart, Star } from "lucide-react"


const Card2 = () => {
  return (
    <div className="m-3 grid grid-cols-5 gap-3">
      <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop"
            alt="Product"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-950">
                Minimalist Watch
              </h3>
              <p className="text-xs tracking-wider text-gray-500 uppercase">
                Accessories
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-gray-900">$299</span>
              <span className="text-sm text-gray-400 line-through">$349</span>
            </div>
          </div>
          <p className="mb-5 line-clamp-2 text-sm text-gray-600">
            Sleek matte finish, water resistant, swiss movement. Simple elegance
            for daily wear.
          </p>
          <button className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-4 transition-shadow duration-300 hover:shadow-xl">
        <div className="relative mb-4 flex aspect-square items-center justify-center rounded-xl bg-gray-50 p-6">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500"
            alt="Headphones"
            className="max-h-full object-contain"
          />
          <button className="absolute top-2 right-2 rounded-full bg-white/80 p-2 text-gray-400 shadow-sm transition hover:text-red-500">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
              WIRELESS
            </span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <h3 className="line-clamp-1 font-bold text-gray-900">
            Premium Noise Cancelling Headphones
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-gray-900">$299</span>
            <span className="text-sm text-gray-400 line-through">$349</span>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 font-bold text-white transition-colors hover:bg-blue-700">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                strokeWidth="2"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="group relative w-full max-w-[320px] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Top Badges & Actions */}
      <div className="absolute top-3 left-0 z-10">
        <span className="bg-[#005a2b] text-white text-xs font-bold px-3 py-1.5 rounded-r-full shadow-sm">
          -7% OFF
        </span>
      </div>
      
      <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-colors">
        <Heart size={20} fill="currentColor" className="text-transparent hover:text-red-500" />
      </button>

      {/* Image Container */}
      <div className="relative pt-8 px-4 pb-2 flex justify-center items-center h-56 bg-gray-50/50">
        <img 
          src="/img/card/xbox-wireless-1-500x500-1897.webp" 
          alt="Xbox Wireless Controller"
          className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2 min-h-[50px]">
          Xbox Wireless Controller 1914
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-gray-200 text-gray-200" />
          ))}
          <span className="text-xs text-gray-400 font-medium ml-1">(0)</span>
        </div>

        {/* Pricing Area */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-2xl font-black text-gray-900">৳ 7,900</span>
          <span className="text-sm text-gray-400 line-through font-medium">৳ 8,500</span>
        </div>

        {/* Single Modern Action Button */}
        <button className="w-full bg-[#005a2b] hover:bg-[#004220] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-green-900/10">
          <ShoppingCart size={18} />
          <span>অর্ডার করুন</span>
        </button>
      </div>

      {/* Subtle border shine on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#005a2b]/10 rounded-2xl pointer-events-none transition-colors duration-300" />
    </div>
    </div>
  )
}

export default Card2
