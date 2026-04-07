import { Heart } from 'lucide-react'; // Optional: npm install lucide-react

const Card1 = () => {
  return (
    <div className='p-10 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50'>
      <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        
        {/* Image Container */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
          
          {/* Primary Image */}
          <img 
            src="/img/card/Panjabi-1.jpg" 
            alt="Linen Shirt Front" 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
          />

          {/* Secondary Image (Shows on Hover) */}
          <img 
            src="/img/card/Panjabi-2.jpg" 
            alt="Linen Shirt Back" 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          />

          {/* New Arrival Badge */}
          <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900 border border-gray-100 shadow-sm">
            New Arrival
          </span>

          {/* Wishlist Icon + Tooltip */}
          <div className="absolute top-3 right-3 z-20 flex flex-col items-center group/tooltip">
            <button className="p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm transition-colors duration-300">
              <Heart size={18} />
            </button>
            
            {/* Tooltip */}
            <span className="absolute top-10 scale-0 group-hover/tooltip:scale-100 transition-all duration-200 origin-top bg-gray-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
              Add to Wishlist
            </span>
          </div>

          {/* Hover Quick Add */}
          <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm p-4">
            <button className="w-full py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
              + Quick Add
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-4 text-center">
          <h3 className="text-sm font-medium text-gray-900 group-hover:underline decoration-stone-300 underline-offset-4">
            Relaxed Linen Shirt
          </h3>
          <p className="mt-1 text-sm text-gray-500 font-serif italic">$89.00</p>
          
          {/* Color Swatches */}
          <div className="mt-3 flex justify-center gap-3">
            <button className="w-3 h-3 rounded-full bg-stone-400 ring-1 ring-offset-2 ring-stone-400"></button>
            <button className="w-3 h-3 rounded-full bg-blue-900 hover:ring-1 hover:ring-offset-2 hover:ring-blue-900 transition-all"></button>
            <button className="w-3 h-3 rounded-full bg-stone-200 hover:ring-1 hover:ring-offset-2 hover:ring-stone-200 transition-all"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;