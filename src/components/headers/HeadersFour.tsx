const HeadersFour = () => {
  return (
    <header className="bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        <div className="flex gap-4">
          <span className="text-emerald-500">● 14,202 Online</span>
          <span>Fast Delivery</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-white transition">Login / Register</a>
          <div className="h-3 w-[1px] bg-slate-800"></div>
          <span className="flex items-center gap-1">Currency: <span className="text-white font-black">USD $</span></span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">
        <div className="text-2xl font-mono font-black italic text-emerald-500">CORE.TECH</div>
        
        <div className="hidden lg:flex items-center bg-slate-900 rounded-full px-6 py-2 border border-slate-800">
          <nav className="flex gap-8 text-sm font-bold">
            <a href="#" className="text-emerald-500">PC Builder</a>
            <a href="#" className="hover:text-emerald-400">Laptops</a>
            <a href="#" className="hover:text-emerald-400">GPU</a>
            <a href="#" className="hover:text-emerald-400">Accessories</a>
          </nav>
        </div>

        <div className="flex gap-5">
           <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 cursor-pointer hover:bg-emerald-500 hover:text-black transition-all">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="2"/></svg>
           </div>
           <div className="bg-emerald-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-black text-sm cursor-pointer hover:bg-white transition-all">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2"/></svg>
             <span>$0.00</span>
           </div>
        </div>
      </div>
    </header>
  );
};

export default HeadersFour;