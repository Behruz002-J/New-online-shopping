import { ArrowRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { containerClass } from "../../components/Container";
import Airpods from "../../assets/images/airpods.png";
import Phone from "../../assets/images/phone.png";
import Playstation from "../../assets/images/playstation.png";

const products = [
  {
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: "$70",
    image: Airpods,
    badge: "HOT",
    badgeClass: "bg-[#ee5858] text-white",
    reviews: 738,
  },
  {
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    price: "$2,300",
    image: Phone,
    reviews: 536,
  },
  {
    title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: "$360",
    image: Playstation,
    badge: "BEST DEALS",
    badgeClass: "bg-[#2da5f3] text-white",
    reviews: 423,
  },
  {
    title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    price: "$80",
    image: Airpods,
    reviews: 816,
    emptyStar: true,
  },
  {
    title: "Wired Over-Ear Gaming Headphones with USB",
    price: "$1,500",
    image: Playstation,
    reviews: 647,
  },
  {
    title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: "$1,200",
    oldPrice: "$1600",
    image: Phone,
    badge: "25% OFF",
    badgeClass: "bg-[#efd33d] text-[#191c1f]",
    reviews: 877,
    emptyStar: true,
  },
  {
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "$250",
    image: Playstation,
    reviews: 426,
    actions: true,
  },
  {
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "$220",
    image: Phone,
    badge: "SALE",
    badgeClass: "bg-[#2db224] text-white",
    reviews: 583,
  },
];

const promoItems = [Phone, Playstation, Airpods, Phone, Airpods, Playstation];

function Rating({
  reviews,
  emptyStar = false,
}: {
  reviews: number;
  emptyStar?: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const isEmpty = emptyStar && index === 4;

        return (
          <Star
            key={index}
            size={16}
            className={
              isEmpty
                ? "fill-white text-[#f3b600]"
                : "fill-[#f3b600] text-[#f3b600]"
            }
          />
        );
      })}
      <span className="ml-1 text-xs text-[#77878f]">({reviews})</span>
    </div>
  );
}

function FeaturedProduct() {
  return (
    <>
    <section className="mt-12 bg-white pb-20">
      <div
        className={`${containerClass} grid gap-6 lg:grid-cols-[312px_minmax(0,1fr)]`}
      >
        <aside className="relative min-h-[520px] overflow-hidden rounded-sm bg-[#f7df69] px-7 py-8 text-center">
          <p className="text-sm font-semibold uppercase text-[#be4646]">
            Computer & Accessories
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#191c1f]">
            32% Discount
          </h2>
          <p className="mt-4 text-base text-[#475156]">
            For all electronics products
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#191c1f]">
            <span>Offers ends in:</span>
            <span className="rounded-sm bg-white px-3 py-2 text-sm font-semibold uppercase">
              Ends of Christmas
            </span>
          </div>

          <button
            type="button"
            className="mx-auto mt-8 inline-flex h-14 items-center gap-3 rounded-sm bg-[#fa8232] px-8 text-sm font-bold uppercase text-white transition hover:bg-[#e67529]"
          >
            Shop now
            <ArrowRight size={20} />
          </button>

          <div className="absolute bottom-6 left-5 right-5 grid grid-cols-3 gap-3">
            {promoItems.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="flex aspect-square items-center justify-center rounded-sm bg-[#ffffff80] p-2 shadow-sm"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-[#191c1f]">
              Featured Products
            </h2>

            <div className="flex flex-wrap items-center gap-5 text-sm text-[#5f6c72]">
              <button
                type="button"
                className="border-b-2 border-[#fa8232] pb-2 font-medium text-[#191c1f]"
              >
                All Product
              </button>
              <button
                type="button"
                className="pb-2 transition hover:text-[#191c1f]"
              >
                Smart Phone
              </button>
              <button
                type="button"
                className="pb-2 transition hover:text-[#191c1f]"
              >
                Laptop
              </button>
              <button
                type="button"
                className="pb-2 transition hover:text-[#191c1f]"
              >
                Headphone
              </button>
              <button
                type="button"
                className="pb-2 transition hover:text-[#191c1f]"
              >
                TV
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 pb-2 font-semibold text-[#fa8232]"
              >
                Browse All Product
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid gap-px bg-[#e4e7e9] sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.title}
                className="relative min-h-[320px] bg-white p-5"
              >
                {product.badge ? (
                  <span
                    className={`absolute left-4 top-4 rounded-sm px-3 py-1 text-xs font-semibold ${
                      product.badgeClass ?? "bg-[#efd33d] text-[#191c1f]"
                    }`}
                  >
                    {product.badge}
                  </span>
                ) : null}

                <div className="relative flex h-[170px] items-center justify-center">
                  <img
                    src={product.image}
                    alt={`${product.title} product`}
                    className="h-full w-full object-contain"
                  />

                  {product.actions ? (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-[#0000001f]">
                      <button
                        type="button"
                        aria-label="Add to wishlist"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191c1f] shadow-sm"
                      >
                        <Heart size={20} />
                      </button>
                      <button
                        type="button"
                        aria-label="Add to cart"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191c1f] shadow-sm"
                      >
                        <ShoppingCart size={20} />
                      </button>
                      <button
                        type="button"
                        aria-label="Quick view"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fa8232] text-white shadow-sm"
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  ) : null}
                </div>

                <Rating
                  reviews={product.reviews}
                  emptyStar={product.emptyStar}
                />

                <h3 className="mt-2 min-h-[42px] text-sm font-medium leading-5 text-[#191c1f]">
                  {product.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm">
                  {product.oldPrice ? (
                    <span className="text-[#929fa5] line-through">
                      {product.oldPrice}
                    </span>
                  ) : null}
                  <span className="font-semibold text-[#2da5f3]">
                    {product.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default FeaturedProduct;
