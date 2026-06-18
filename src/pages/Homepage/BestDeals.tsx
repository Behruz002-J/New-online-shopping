import { ArrowRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { containerClass } from "../../components/Container";
import Airpods from "../../assets/images/airpods.png";
import Phone from "../../assets/images/phone.png";
import Playstation from "../../assets/images/playstation.png";
import CreditCard from "../../assets/icons/CreditCard.svg";
import Headphones from "../../assets/icons/Headphones.svg";
import Package from "../../assets/icons/Package.svg";
import Trophy from "../../assets/icons/Trophy.svg";
import FeaturedProduct from "./FeaturedProduct";

const services = [
  {
    icon: Package,
    title: "Fasted Delivery",
    text: "Delivery in 24/H",
  },
  {
    icon: Trophy,
    title: "24 Hours Return",
    text: "100% money-back guarantee",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    text: "Your money is safe",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    text: "Live contact/message",
  },
];

const products = [
  {
    title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: "$2,300",
    oldPrice: "",
    image: Airpods,
    badge: "SOLD OUT",
    badgeClass: "bg-[#929fa5] text-white",
  },
  {
    title: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: "$220",
    oldPrice: "",
    image: Phone,
  },
  {
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "$1,50",
    oldPrice: "$865",
    image: Playstation,
    badge: "19% OFF",
    badgeClass: "bg-[#efd33d] text-[#191c1f]",
  },
  {
    title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: "$1,200",
    oldPrice: "",
    image: Headphones,
    featuredAction: true,
  },
  {
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "$299",
    oldPrice: "",
    image: Phone,
  },
  {
    title: "Portable Wshing Machine, 11lbs capacity Model 18NMF1AM",
    price: "$70",
    oldPrice: "$865.99",
    image: Playstation,
  },
  {
    title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: "$160",
    oldPrice: "",
    image: Phone,
    badge: "HOT",
    badgeClass: "bg-[#ee5858] text-white",
  },
  {
    title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: "$250",
    oldPrice: "$360",
    image: Airpods,
    badge: "32% OFF",
    badgeClass: "bg-[#efd33d] text-[#191c1f]",
  },
];

function BestDeals() {
  const [addedProduct, setAddedProduct] = useState("");

  const addToCart = (productName: string) => {
    const currentCount = Number(localStorage.getItem("cart-count") ?? 0);
    localStorage.setItem("cart-count", String(currentCount + 1));
    window.dispatchEvent(new Event("cart-updated"));
    setAddedProduct(productName);
    window.setTimeout(() => setAddedProduct(""), 1400);
  };

  return (
    <main className="bg-white py-6">
      <div className={containerClass}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)]">
          <section className="relative min-h-[512px] overflow-hidden rounded-sm bg-[#f2f4f5] px-6 py-10 sm:px-14 lg:px-16">
            <div className="relative z-10 flex h-full max-w-[420px] flex-col justify-center">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase text-[#2da5f3]">
                <span className="h-0.5 w-6 bg-[#2da5f3]" />
                The best place to play
              </div>

              <h1 className="text-4xl font-semibold leading-tight text-[#191c1f] sm:text-5xl">
                Xbox Consoles
              </h1>
              <p className="mt-5 text-base leading-6 text-[#475156]">
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </p>

              <button
                type="button"
                className="mt-8 inline-flex h-14 w-fit items-center gap-3 rounded-sm bg-[#fa8232] px-8 text-sm font-bold uppercase text-white transition hover:bg-[#e67529]"
              >
                Shop now
                <ArrowRight size={20} />
              </button>

              <div className="mt-24 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#191c1f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#adb7bc]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#adb7bc]" />
              </div>
            </div>

            <div className="absolute bottom-8 right-6 h-[300px] w-[320px] sm:right-12 sm:h-[380px] sm:w-[410px] lg:bottom-12 lg:right-8">
              <img
                src={Playstation}
                alt="Xbox console image placeholder"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute right-9 top-14 flex h-[104px] w-[104px] items-center justify-center rounded-full border-4 border-white bg-[#2da5f3] text-2xl font-semibold text-white shadow-sm sm:right-16">
              $299
            </div>
          </section>

          <div className="grid gap-6">
            <section className="relative min-h-[244px] overflow-hidden rounded-sm bg-[#191c1f] px-10 py-10 text-white">
              <div className="relative z-10 max-w-[220px]">
                <p className="text-xs font-semibold uppercase text-[#ebc80c]">
                  Summer Sales
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-8">
                  New Google Pixel 6 Pro
                </h2>

                <button
                  type="button"
                  className="mt-6 inline-flex h-12 items-center gap-2 rounded-sm bg-[#fa8232] px-6 text-sm font-bold uppercase text-white transition hover:bg-[#e67529]"
                >
                  Shop now
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="absolute right-4 top-5 h-[210px] w-[170px]">
                <img
                  src={Phone}
                  alt="Google Pixel phone image placeholder"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="absolute right-0 top-0 bg-[#efd33d] px-5 py-3 text-sm font-bold text-[#191c1f]">
                29% OFF
              </div>
            </section>

            <section className="relative min-h-[244px] overflow-hidden rounded-sm bg-[#f2f4f5] px-8 py-8">
              <div className="grid h-full grid-cols-[1fr_1fr] items-center gap-5">
                <div className="h-[180px] min-w-0">
                  <img
                    src={Airpods}
                    alt="Xiaomi earbuds image placeholder"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold leading-8 text-[#191c1f]">
                    Xiaomi FlipBuds Pro
                  </h2>
                  <p className="mt-3 text-lg font-semibold text-[#2da5f3]">
                    $299 USD
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex h-12 items-center gap-2 rounded-sm bg-[#fa8232] px-6 text-sm font-bold uppercase text-white transition hover:bg-[#e67529]"
                  >
                    Shop now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="mt-6 grid rounded-sm border border-[#e4e7e9] bg-white md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex items-center gap-4 px-8 py-6 ${
                index !== services.length - 1
                  ? "xl:border-r xl:border-[#e4e7e9]"
                  : ""
              }`}
            >
              <img src={service.icon} alt="" className="h-10 w-10 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold uppercase text-[#191c1f]">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-[#5f6c72]">{service.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <div className="mb-6 flex flex-col gap-4 border-b border-[#e4e7e9] pb-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-2xl font-semibold text-[#191c1f]">
                Best Deals
              </h2>
              <span className="text-sm text-[#475156]">Deals ends in</span>
              <span className="rounded-sm bg-[#f3de6d] px-3 py-1.5 text-sm font-medium text-[#191c1f]">
                16d : 21h : 57m : 23s
              </span>
            </div>

            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#2da5f3] transition hover:text-[#1b6392]"
            >
              Browse All Product
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid border border-[#e4e7e9] bg-white lg:grid-cols-[320px_minmax(0,1fr)]">
            <article className="flex flex-col border-b border-[#e4e7e9] p-6 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex gap-2">
                <span className="rounded-sm bg-[#efd33d] px-3 py-1 text-xs font-semibold text-[#191c1f]">
                  32% OFF
                </span>
                <span className="rounded-sm bg-[#ee5858] px-3 py-1 text-xs font-semibold text-white">
                  HOT
                </span>
              </div>

              <div className="flex h-[280px] items-center justify-center">
                <img
                  src={Playstation}
                  alt="Xbox Series S console image placeholder"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-[#f3b600] text-[#f3b600]"
                  />
                ))}
                <span className="ml-2 text-sm text-[#77878f]">(52,677)</span>
              </div>

              <h3 className="mt-3 text-base font-medium leading-6 text-[#191c1f]">
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Versio...
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-[#929fa5] line-through">
                  $865.99
                </span>
                <span className="text-xl font-semibold text-[#2da5f3]">
                  $442.12
                </span>
              </div>

              <p className="mt-4 text-sm leading-5 text-[#5f6c72]">
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </p>

              <div className="mt-6 grid grid-cols-[48px_1fr_48px] gap-2">
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="flex h-12 items-center justify-center rounded-sm bg-[#ffe7d6] text-[#191c1f]"
                >
                  <Heart size={20} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    addToCart(
                      "Xbox Series S - 512GB SSD Console with Wireless Controller",
                    )
                  }
                  className="flex h-12 items-center justify-center gap-2 rounded-sm bg-[#fa8232] text-sm font-bold uppercase text-white transition hover:bg-[#e67529]"
                >
                  <ShoppingCart size={18} />
                  {addedProduct ? "Added" : "Add to card"}
                </button>
                <button
                  type="button"
                  aria-label="Quick view"
                  className="flex h-12 items-center justify-center rounded-sm bg-[#ffe7d6] text-[#191c1f]"
                >
                  <Eye size={20} />
                </button>
              </div>
            </article>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.title}
                  className="relative min-h-[292px] border-b border-r border-[#e4e7e9] p-5 last:border-r-0"
                >
                  {product.badge ? (
                    <span
                      className={`absolute left-4 top-4 rounded-sm px-2.5 py-1 text-xs font-semibold ${
                        product.badgeClass ?? "bg-[#efd33d] text-[#191c1f]"
                      }`}
                    >
                      {product.badge}
                    </span>
                  ) : null}

                  <div className="relative flex h-[150px] items-center justify-center bg-white">
                    <img
                      src={product.image}
                      alt={`${product.title} image placeholder`}
                      className="h-full w-full object-contain"
                    />

                    {product.featuredAction ? (
                      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-[#00000008]">
                        <button
                          type="button"
                          aria-label="Add to wishlist"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fa8232] text-white"
                        >
                          <Heart size={20} />
                        </button>
                        <button
                          type="button"
                          aria-label="Add to cart"
                          onClick={() => addToCart(product.title)}
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191c1f] shadow-sm"
                        >
                          <ShoppingCart size={20} />
                        </button>
                        <button
                          type="button"
                          aria-label="Quick view"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191c1f] shadow-sm"
                        >
                          <Eye size={20} />
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <h3 className="mt-4 min-h-[42px] text-sm font-medium leading-5 text-[#191c1f]">
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
        </section>

        <FeaturedProduct />
      </div>
    </main>
  );
}

export default BestDeals;
