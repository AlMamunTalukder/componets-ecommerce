export const CategoryStyle1 = () => {
  const categories = [
    { name: "Skincare", count: "42 Items", color: "bg-rose-50", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300" },
    { name: "Hair Care", count: "18 Items", color: "bg-blue-50", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300" },
    { name: "Fragrance", count: "24 Items", color: "bg-amber-50", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      {categories.map((cat) => (
        <div key={cat.name} className={`${cat.color} rounded-[2.5rem] p-8 relative overflow-hidden group cursor-pointer h-64`}>
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-gray-900">{cat.name}</h3>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">{cat.count}</p>
          </div>
          <img 
            src={cat.img} 
            className="absolute -right-4 -bottom-4 w-40 h-40 object-contain group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 drop-shadow-xl" 
          />
        </div>
      ))}
    </div>
  );
};