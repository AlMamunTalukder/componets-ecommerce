const CategoryStyle4 = () => {
  const categoryData = [
    {
      title: "MEN'S",
      subtitle: "COLLECTION",
      image: "/img/category/men.avif", 
      bgColor: "bg-[#99C3E1]", 
      textColor: "text-[#1a3a5a]",
    },
    {
     
      image: "/img/category/women.avif",
      
    },
    {
      
      image: "/img/category/kids.avif",
      
    },
    {
      title: "ACCESSORIES",
      subtitle: "COLLECTION",
      image: "/img/category/accessories.avif",
      bgColor: "bg-[#B2F2C5]", // Light Green
      textColor: "text-[#1a4a2a]",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Grid Layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className={`relative  group cursor-pointer overflow-hidden rounded-sm transition-all duration-500 hover:shadow-xl`}
          >
         <img
                src={item.image}
                alt={item.title}
                className="h-full w-auto transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
              />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryStyle4
