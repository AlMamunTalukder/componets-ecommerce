export const CategoryStyle2 = () => {
  const items = ["Electronics", "Fashion", "Home", "Beauty", "Sports", "Toys"];
  
  return (
    <div className="flex gap-8 overflow-x-auto px-6 py-4 scrollbar-hide">
      {items.map((item) => (
        <div key={item} className="flex flex-col items-center gap-3 shrink-0 group cursor-pointer">
          <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-transparent group-hover:border-indigo-600 p-1 transition-all">
            <div className="w-full h-full rounded-full bg-white overflow-hidden">
              <img src={`https://source.unsplash.com/random/200x200?${item}`} className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="text-xs font-black uppercase tracking-tighter text-gray-600 group-hover:text-indigo-600">{item}</span>
        </div>
      ))}
    </div>
  );
};