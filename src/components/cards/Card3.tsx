import { ShoppingCart } from "lucide-react"

const product = {
  name: "মেডজুল খেজুর | Medjool Dates",
  price: "১৮৫০",
  image: "/img/card/medjul.webp",
  brand: "Linah Farms",
}

const Card3 = () => { 
  // const [count, setCount] = useState(0);
  return (
    <div className="m-3 grid grid-cols-5">
      <div className="group relative mx-auto max-w-sm overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        {/* Product Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover "Add to Cart" Button */}
          <button className="absolute bottom-0 left-0 flex w-full translate-y-full transform items-center justify-center gap-2 bg-[#fbb03b] py-3 text-lg font-bold text-white transition-all duration-300 group-hover:translate-y-0 hover:bg-[#e5a035]">
            <ShoppingCart size={24} />
            <span>যোগ করুন</span>
          </button>
        </div>

        {/* Product Info Section */}
        <div className="bg-white p-5 text-center">
          <h3 className="mb-6 text-xl font-bold text-gray-800">
            {product.name}
          </h3>

          <div className="text-3xl font-extrabold text-[#fbb03b]">
            ৳ {product.price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card3
