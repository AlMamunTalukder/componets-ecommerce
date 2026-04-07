const HeadersTwo = () => {
  return (
    <header className="relative w-full bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
        {/* Left Links */}
        <nav className="hidden flex-1 gap-6 lg:flex">
          <div className="group py-8">
            <span className="cursor-pointer text-xs font-bold tracking-[3px] uppercase transition-colors group-hover:text-stone-400">
              Men
            </span>
            <div className="animate-slideDown absolute top-full left-0 z-50 hidden w-full border-b border-stone-200 bg-stone-50 p-10 group-hover:block">
              <div className="mx-auto grid max-w-5xl grid-cols-4 gap-8 text-[10px] tracking-widest uppercase">
                <div>
                  <h5 className="mb-4 border-b border-stone-200 pb-2 font-black">
                    Clothing
                  </h5>
                  <p className="py-1">Coats</p>
                  <p className="py-1">Jackets</p>
                  <p className="py-1">Suits</p>
                </div>
                <div>
                  <h5 className="mb-4 border-b border-stone-200 pb-2 font-black">
                    Shoes
                  </h5>
                  <p className="py-1">Boots</p>
                  <p className="py-1">Loafers</p>
                  <p className="py-1">Sneakers</p>
                </div>
                <div className="relative col-span-2 aspect-video overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=500"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 bg-white px-4 py-2 font-black">
                    NEW SEASON
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="cursor-pointer py-8 text-xs font-bold tracking-[3px] uppercase hover:text-stone-400">
            Women
          </span>
          <span className="cursor-pointer py-8 text-xs font-bold tracking-[3px] uppercase hover:text-stone-400">
            Journal
          </span>
        </nav>

        {/* Center Logo */}
        <div className="flex flex-1 justify-center font-serif text-3xl font-black tracking-tighter">
          L'AVENUE
        </div>

        {/* Right Icons */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <svg
            className="h-5 w-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeWidth="2"
            />
          </svg>
          <div className="flex cursor-pointer items-center gap-1">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                strokeWidth="2"
              />
            </svg>
            <span className="text-xs font-bold underline">0</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeadersTwo
