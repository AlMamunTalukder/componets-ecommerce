import  { useState } from 'react';

const HeaderOne = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-[11px] py-2 px-6 flex justify-between items-center uppercase tracking-widest">
        <span>Free shipping on orders over $100</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-400">Track Order</a>
          <a href="#" className="hover:text-orange-400">Help</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-8">
        <h1 className="text-2xl font-black italic text-slate-900 shrink-0">SHOPLY.</h1>

  
        <div className="hidden md:flex flex-grow relative">
          <input type="text" placeholder="Search for products..." className="w-full bg-gray-100 border-none rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-orange-500 transition-all outline-none" />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-1.5 rounded-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="flex flex-col items-center cursor-pointer group">
            <svg className="w-6 h-6 text-slate-700 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <span className="text-[10px] font-bold text-slate-500">ACCOUNT</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative group">
            <svg className="w-6 h-6 text-slate-700 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
            <span className="text-[10px] font-bold text-slate-500">CART</span>
          </div>
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2 bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {/* Mega Menu Row (Desktop) */}
      <div className="hidden md:block border-t border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 flex gap-8">
          {['Electronics', 'Fashion', 'Home', 'Beauty'].map((cat) => (
            <div key={cat} className="group relative py-4">
              <button className="text-sm font-semibold text-slate-700 flex items-center gap-1 hover:text-orange-600">
                {cat} <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              {/* MEGA MENU CONTENT */}
              <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-3 w-[600px] bg-white shadow-2xl border border-gray-100 p-8 z-[100] animate-fadeIn">
                <div>
                  <h4 className="font-bold mb-4 text-orange-600">Top Brands</h4>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="hover:text-black cursor-pointer">Apple</li>
                    <li className="hover:text-black cursor-pointer">Samsung</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-orange-600">Trending</h4>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="hover:text-black cursor-pointer">New Arrivals</li>
                    <li className="hover:text-black cursor-pointer">Best Sellers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-400 mb-2">PROMO</p>
                  <p className="text-sm font-black">Get 20% OFF using code SHOP20</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;