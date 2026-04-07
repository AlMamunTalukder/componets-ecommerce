import { ShoppingCart } from 'lucide-react'; 

const Card5 = () => {
  const product = {
    name: "Premium Velvet Sofa Set (3+2+1)",
    originalPrice: "85,000",
    discountPrice: "72,500",
    discountBadge: "১৫% ছাড়", // 15% OFF in Bengali
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500",
    stockStatus: "In Stock"
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      {/* Main Card Container */}
      <div className="w-full max-w-[300px] bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
        
        {/* Top Image Section */}
        <div className="relative aspect-video sm:aspect-square bg-gray-50 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Bengali Discount Badge - Very important for BD market */}
          <div className="absolute top-0 left-0 bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-br-2xl shadow-md">
            {product.discountBadge}
          </div>

          {/* Wishlist Button - Always visible for ease of use */}
          <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full shadow hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Stock Status */}
          <p className="text-[10px] uppercase font-bold text-green-600 mb-1 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            {product.stockStatus}
          </p>

          {/* Product Name - Clear and readable */}
          <h3 className="text-lg font-bold text-gray-800 leading-tight h-12 line-clamp-2">
            {product.name}
          </h3>

          {/* Pricing Section - Highly emphasized */}
          <div className="mt-3 mb-4 flex flex-col">
            <span className="text-xs text-gray-500 line-through">৳ {product.originalPrice}</span>
            <span className="text-2xl font-black text-[#005a2b]">৳ {product.discountPrice}</span>
          </div>

          {/* Big Green Action Button - No hover needed to see it */}
          <button className="w-full bg-[#005a2b] hover:bg-[#004220] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95">
            <ShoppingCart size={20} />
            <span>অর্ডার করুন</span>
          </button>

          {/* Secondary Action Link */}
          <button className="w-full mt-2 text-sm font-semibold text-gray-600 hover:text-black py-1 border-b-2 border-transparent hover:border-gray-300 transition-all">
            বিস্তারিত দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card5;