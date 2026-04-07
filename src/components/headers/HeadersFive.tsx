const HeadersFive = () => {
  return (
    <header className="w-full bg-indigo-700">
      <div className="px-6 h-24 flex items-center justify-between gap-10">
        <div className="text-3xl font-black text-white shrink-0 tracking-tighter">GROCER.</div>
        
        {/* Massive Search */}
        <div className="hidden md:flex grow max-w-2xl bg-white rounded-md overflow-hidden p-1">
          <select className="text-xs font-bold bg-gray-100 border-none outline-none px-4">
            <option>All Depts</option>
            <option>Fresh</option>
          </select>
          <input type="text" className="grow px-4 outline-none text-sm" placeholder="Search 50,000+ items..." />
          <button className="bg-orange-500 text-white px-6 font-bold text-sm">SEARCH</button>
        </div>

        <div className="flex gap-8 items-center text-white shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2"/></svg>
             </div>
             <div className="hidden sm:block">
               <p className="text-[10px] opacity-70">Hello, Sign in</p>
               <p className="text-xs font-bold leading-none">Account & Lists</p>
             </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer bg-white/10 px-4 py-2 rounded-md">
             <div className="relative">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="2"/></svg>
               <span className="absolute -top-1 -right-1 bg-orange-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">12</span>
             </div>
             <span className="font-bold text-sm">$45.50</span>
          </div>
        </div>
      </div>
      
      {/* Mega Category Bar */}
      <div className="bg-white px-6 flex items-center gap-8 py-3 border-b border-gray-200">
        <div className="group relative">
           <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded text-xs font-bold">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2"/></svg>
             BROWSE DEPARTMENTS
           </button>
           {/* MEGA MENU */}
           <div className="absolute top-full left-0 hidden group-hover:block w-[280px] bg-white shadow-2xl border border-gray-100 z-50 animate-fadeIn">
              {['Fresh Food', 'Household', 'Drinks', 'Personal Care', 'Baby'].map(item => (
                <div key={item} className="px-6 py-4 border-b border-gray-50 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer font-bold text-sm text-gray-700 flex justify-between">
                  {item} <span>→</span>
                </div>
              ))}
           </div>
        </div>
        <div className="hidden lg:flex gap-6 text-xs font-black text-gray-500">
           <a href="#" className="hover:text-indigo-600">DEALS</a>
           <a href="#" className="hover:text-indigo-600">COUPONS</a>
           <a href="#" className="hover:text-indigo-600">STORE FINDER</a>
        </div>
      </div>
    </header>
  );
};

export default HeadersFive
