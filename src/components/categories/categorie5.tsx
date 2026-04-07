export const CategoryStyle5 = () => {
  return (
    <div className="relative p-10 bg-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {['Audio', 'Gaming', 'Mobile', 'Watch'].map(item => (
          <div key={item} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center hover:bg-white/10 transition-all cursor-pointer group">
             <div className="h-20 flex items-center justify-center mb-4">
                {/* Mockup for image */}
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform shadow-xl"></div>
             </div>
             <h4 className="text-white font-bold text-sm tracking-widest uppercase">{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};