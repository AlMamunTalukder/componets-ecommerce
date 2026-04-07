import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const Card4 = () => {
  const [selectedSize, setSelectedSize] = useState('8');

  const product = {
    brand: "BATA",
    name: "Bata MATTE Slip-On Sandal For Men",
    price: "1,999.00",
    sizes: ['10', '8', '7', '6'],
    imageFront: "/img/card/bata1.webp", 
    imageHover: "/img/card/bata2.webp"
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 ">
      <div className="group relative w-full max-w-[300px] bg-white rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-500 p-4 overflow-hidden">
        
        {/* Wishlist - Hidden by default */}
        <button className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
          <Heart size={18} />
        </button>

        {/* Image Container */}
        <div className="relative aspect-square mb-4 overflow-hidden rounded-xl ">
          <img 
            src={product.imageFront} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img 
            src={product.imageHover} 
            alt={`${product.name} Detail`}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-700 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100"
          />
        </div>

        {/* Info Section - Always Visible */}
        <div className="text-center transition-transform duration-500 group-hover:translate-y-[-10px]">
          <span className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase">
            {product.brand}
          </span>
          <h3 className="text-sm font-semibold text-gray-800 mt-1">
            {product.name}
          </h3>
          <p className="text-lg font-black text-gray-950 mt-1">
            Tk {product.price}
          </p>
        </div>

        {/* --- HOVER REVEAL SECTION --- */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
          
          {/* Size Selection */}
          <div className="flex justify-center gap-2 my-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 rounded-full text-[10px] font-bold transition-all border flex items-center justify-center
                  ${selectedSize === size 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 text-gray-500 hover:border-black'}`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Action Button */}
          <button className="w-full bg-black text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            <ShoppingCart size={14} />
            Shop Now
          </button>

          {/* Color Indicator */}
          <div className="mt-4 flex justify-center pb-2">
            <div className="w-3 h-3 rounded-full bg-[#8E3232] ring-2 ring-offset-2 ring-gray-100"></div>
          </div>
        </div>
        {/* --------------------------- */}

      </div>
    </div>
  );
};

export default Card4;