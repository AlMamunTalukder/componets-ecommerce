export const CategoryStyle3 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
      <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h3 className="text-4xl font-serif italic">Men's Collection</h3>
          <p className="mt-4 border-b border-white pb-1 text-sm font-bold tracking-[0.2em] uppercase">Shop Now</p>
        </div>
      </div>
      <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h3 className="text-4xl font-serif italic">Women's Collection</h3>
          <p className="mt-4 border-b border-white pb-1 text-sm font-bold tracking-[0.2em] uppercase">Shop Now</p>
        </div>
      </div>
    </div>
  );
};