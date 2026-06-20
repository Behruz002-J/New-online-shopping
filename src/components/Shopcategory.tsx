import { containerClass } from "./Container";

const categories = [
  "Electronics Devices",
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watches & Accessories",
  "GPS & Navigation",
  "Wearable Technology",
];

const products = [
  {
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: "$70",
    badge: "HOT",
    rating: 4.9,
    reviews: 738,
    image: "https://via.placeholder.com/240x260?text=Product+1",
  },
  {
    title: "Gaming Drone with 4K Camera",
    price: "$120",
    badge: "NEW",
    rating: 4.8,
    reviews: 512,
    image: "https://via.placeholder.com/240x260?text=Product+2",
  },
  {
    title: "Wireless Headphones Noise Cancelling",
    price: "$89",
    badge: "SALE",
    rating: 4.7,
    reviews: 420,
    image: "https://via.placeholder.com/240x260?text=Product+3",
  },
];

export default function Shopcategory() {
  return (
    <section className={`${containerClass} py-8`}>
      <div className="grid grid-cols-[300px_minmax(0,1fr)] gap-8">
        <aside className="sticky top-24 self-start">
          <div className="rounded-[30px] border border-slate-200 bg-white px-6 py-7 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold uppercase tracking-[0.28em] text-slate-900">
              CATEGORY
            </h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={category}>
                  <button
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm transition ${
                      index === 0
                        ? "bg-orange-50 text-slate-900"
                        : "bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                        index === 0 ? "bg-orange-500" : "bg-slate-200"
                      }`}
                    >
                      {index === 0 ? (
                        <span className="h-2.5 w-2.5 rounded-full bg-white" />
                      ) : null}
                    </span>
                    <span className="truncate">{category}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">PRICE RANGE</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Min price</span>
                <span>Max price</span>
              </div>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  className="w-full accent-orange-500"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  className="w-full accent-orange-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Min price"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
                <input
                  type="text"
                  placeholder="Max price"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Search for anything...</h3>
                <p className="text-sm text-slate-500">
                  Active Filters:{" "}
                  <span className="font-semibold text-slate-900">
                    Electronics Devices
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="search"
                  placeholder="Search for anything..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 md:w-80"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="relative overflow-hidden rounded-[28px] bg-slate-100">
                  <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-orange-500">
                    <span>?????</span>
                    <span className="text-slate-500">({product.reviews})</span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-900">
                    {product.title}
                  </h4>
                  <p className="text-lg font-bold text-slate-900">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
