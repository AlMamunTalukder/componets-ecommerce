

const HeadersThree = () => {
  return (
    <nav className="bg-white border-b border-stone-100 sticky top-0 z-50">
      {/* Top Bar: Logo & Actions */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Action (Left) */}
        <div className="flex-1 hidden sm:flex justify-start">
          <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 border border-stone-200 px-5 py-2 hover:bg-stone-950 hover:text-white transition-all duration-300">
            Shop All
          </button>
        </div>

        {/* Logo (Center) */}
        <a href="#" className="text-3xl font-serif text-stone-950 tracking-tighter flex-none uppercase">
          Maison
        </a>

        {/* Icons (Right) */}
        <div className="flex-1 flex justify-end items-center gap-6 text-stone-700">
          {/* Account Icon */}
          <button className="hover:text-stone-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          {/* Search Icon */}
          <button className="hover:text-stone-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {/* Cart Icon */}
          <button className="relative hover:text-stone-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-stone-950 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Navigation Row with Hover Mega Menus */}
      <div className="border-t border-stone-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-center gap-12 text-[11px] uppercase tracking-[0.15em] text-stone-600 font-bold">
          
          {/* Simple Link */}
          <a href="#" className="hover:text-stone-950 transition-colors py-4">New Arrivals</a>

          {/* Mega Menu Link (Clothing) */}
          <div className="group static py-4">
            <button className="hover:text-stone-950 transition-colors flex items-center gap-1">
              Clothing <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"/></svg>
            </button>
            
            {/* Mega Menu Content */}
            <div className="absolute top-full left-0 w-full bg-white border-b border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-xl">
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 p-10">
                <div>
                  <h4 className="text-stone-950 mb-6 border-b border-stone-100 pb-2">Tops</h4>
                  <ul className="space-y-3 text-stone-500 font-medium normal-case tracking-normal text-sm">
                    <li><a href="#" className="hover:text-stone-950 transition">T-Shirts & Basics</a></li>
                    <li><a href="#" className="hover:text-stone-950 transition">Shirts & Blouses</a></li>
                    <li><a href="#" className="hover:text-stone-950 transition">Knitwear</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-stone-950 mb-6 border-b border-stone-100 pb-2">Bottoms</h4>
                  <ul className="space-y-3 text-stone-500 font-medium normal-case tracking-normal text-sm">
                    <li><a href="#" className="hover:text-stone-950 transition">Denim</a></li>
                    <li><a href="#" className="hover:text-stone-950 transition">Trousers</a></li>
                    <li><a href="#" className="hover:text-stone-950 transition">Skirts</a></li>
                  </ul>
                </div>
                {/* Visual Featured Image in Menu */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <div className="relative group/img overflow-hidden bg-stone-100 aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500" alt="New" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10"></div>
                    <span className="absolute bottom-4 left-4 text-white font-bold">Linen Series</span>
                  </div>
                  <div className="relative group/img overflow-hidden bg-stone-100 aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500" alt="Sale" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10"></div>
                    <span className="absolute bottom-4 left-4 text-white font-bold">Summer Essentials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Dropdown Link (Accessories) */}
          <div className="group relative py-4">
            <button className="hover:text-stone-950 transition-colors flex items-center gap-1">
              Accessories <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2"/></svg>
            </button>
            {/* Smaller Dropdown */}
            <div className="absolute top-full left-0 w-48 bg-white border border-stone-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
              <ul className="space-y-4 text-stone-500 font-medium normal-case tracking-normal text-xs">
                <li><a href="#" className="hover:text-stone-950 transition">Handbags</a></li>
                <li><a href="#" className="hover:text-stone-950 transition">Jewelry</a></li>
                <li><a href="#" className="hover:text-stone-950 transition">Scarves & Belts</a></li>
                <li><a href="#" className="hover:text-stone-950 transition underline underline-offset-4 text-stone-950">View All</a></li>
              </ul>
            </div>
          </div>

          <a href="#" className="hover:text-stone-950 transition-colors py-4">Journal</a>
        </div>
      </div>
    </nav>
  );
};

export default HeadersThree;