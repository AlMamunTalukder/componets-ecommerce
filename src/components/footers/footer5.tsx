

const Footer5 = () => {
  const map = {
    "Shop Categories": ["Men", "Women", "Kids", "Home", "Sale"],
    "Account": ["Login", "Register", "Orders", "Wishlist"],
    "Company": ["About", "History", "Careers", "Sustainability"],
    "Support": ["FAQ", "Shipping", "Returns", "Contact"]
  }
  return (
    <footer className="bg-stone-100 border-t border-stone-200 mt-20 px-6 py-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <div className="col-span-2 md:col-span-3 lg:col-span-2 pr-10">
          <span className="text-3xl font-serif text-stone-900">URBAN</span>
          <p className="text-stone-600 mt-4 text-sm leading-relaxed">Ethically sourced, sustainably made modern apparel for the conscious consumer. We believe in quality that lasts.</p>
        </div>
        
        {Object.entries(map).map(([title, links]) => (
          <div key={title}>
            <h6 className="font-semibold text-stone-950 mb-5 text-sm">{title}</h6>
            <ul className="space-y-3.5 text-stone-700 text-sm">
              {links.map(link => (
                <li key={link}><a href="#" className="hover:text-orange-700">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer5;