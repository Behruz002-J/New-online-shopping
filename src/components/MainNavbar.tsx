import Black from "../assets/icons/Black.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Pinterest from "../assets/icons/Pinterest.svg";
import Youtube from "../assets/icons/Youtube.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Logo from "../assets/logos/clicon.svg";
import Search from "../assets/icons/search.svg";
import Cart from "../assets/icons/ShoppingCartSimple.svg";
import Heart from "../assets/icons/Heart.svg";
import User from "../assets/icons/User.svg";
import Info from "../assets/icons/Info.svg";
import PhoneCall from "../assets/icons/PhoneCall.svg";
import HeadPones from "../assets/icons/Headphones.svg";
import Clockwise from "../assets/icons/Clockwise.svg";
import Location from "../assets/icons/MapPinLine.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { containerClass } from "./Container";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [cartCount, setCartCount] = useState(() => {
    return Number(localStorage.getItem("cart-count") ?? 0);
  });

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(Number(localStorage.getItem("cart-count") ?? 0));
    };

    window.addEventListener("cart-updated", updateCartCount);
    return () => window.removeEventListener("cart-updated", updateCartCount);
  }, []);

  if (!visible) return null;

  return (
    <header className="w-full bg-[#1b6392] text-white">
      <div className="w-full bg-zinc-900 text-white">
        <div
          className={`${containerClass} relative flex h-12 items-center justify-between`}
        >
          <div className="flex items-center gap-3">
            <img src={Black} alt="" />
            <span className="text-sm font-medium tracking-wide">Friday</span>
          </div>

          <div className="hidden items-baseline gap-1 sm:flex">
            <span className="text-sm">Up to</span>
            <span className="text-2xl font-extrabold tracking-tight text-yellow-400">
              59%
            </span>
            <span className="text-sm font-semibold">OFF</span>
          </div>

          <div className="flex min-w-fit items-center gap-4 pr-16">
            <Link
              to="/shoppage"
              className="flex h-10 w-[134px] items-center justify-center gap-2 whitespace-nowrap rounded-none bg-[#f5d20a] text-xs font-extrabold uppercase text-[#191c1f] transition-colors hover:bg-[#eac800]"
            >
              SHOP NOW
              <ArrowRight size={16} strokeWidth={2.4} />
            </Link>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-600 px-1.5 py-0.5 text-base leading-none transition-colors hover:text-white sm:right-0 xl:-right-12"
              aria-label="close"
            >
              x
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-white/20">
        <div
          className={`${containerClass} flex h-10 items-center justify-between text-sm`}
        >
          <p className="text-sm">Welcome to Clicon online eCommerce store.</p>

          <div className="flex items-center gap-4 text-white/90">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="mr-2">Follow us:</span>
              <a
                href="#"
                aria-label="Facebook"
                className="opacity-90 hover:opacity-100"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="h-4 w-4"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="opacity-90 hover:opacity-100"
              >
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="h-4 w-4"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="opacity-90 hover:opacity-100"
              >
                <img
                  src={Pinterest}
                  alt="Pinterest"
                  className="h-4 w-4"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="opacity-90 hover:opacity-100"
              >
                <img
                  src={Youtube}
                  alt="YouTube"
                  className="h-4 w-4"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="opacity-90 hover:opacity-100"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="h-4 w-4"
                  loading="lazy"
                />
              </a>
            </div>

            <div className="flex items-center gap-2 border-l border-white/20 pl-3">
              <button
                type="button"
                aria-label="Language: English"
                className="text-sm text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Eng
              </button>
              <span className="hidden sm:inline">/</span>
              <button
                type="button"
                aria-label="Currency: USD"
                className="text-sm text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                USD
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${containerClass} flex h-20 items-center justify-between`}
      >
        <div className="flex items-center gap-4">
          <Link to="/" aria-label="Home">
            <img src={Logo} alt="Clicon" className="h-10 w-auto" />
          </Link>
        </div>

        <nav aria-label="Primary" className="flex-1 px-4">
          <form
            role="search"
            className="mx-auto flex h-12 w-full max-w-2xl items-center rounded-sm bg-white px-3 shadow-sm"
          >
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search for anything..."
              className="w-full border-none bg-transparent text-black outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#f3f6f9]"
            >
              <img src={Search} alt="" className="h-5 w-5" />
            </button>
          </form>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Cart"
            className="relative rounded p-2 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <img src={Cart} alt="Cart" className="h-5 w-5" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#1b6392] bg-white px-1 text-xs font-bold leading-none text-[#1b6392]">
                {cartCount}
              </span>
            ) : null}
          </button>
          <button
            aria-label="Wishlist"
            className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <img src={Heart} alt="Wishlist" className="h-5 w-5" />
          </button>
          <button
            aria-label="Account"
            className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <img src={User} alt="User" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white text-slate-700">
        <nav aria-label="Utilities" className={containerClass}>
          <ul className="flex items-center gap-4 py-3 text-sm">
            <li>
              <button
                type="button"
                className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                <img src={Clockwise} alt="All Category" className="h-4 w-4" />
                <span className="hidden sm:inline">All Category</span>
              </button>
            </li>
            <li>
              <Link
                to="/track-order"
                className="flex items-center gap-2 text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                <img src={Location} alt="Track order" />
                <span className="hidden sm:inline">Track Order</span>
              </Link>
            </li>
            <li>
              <Link
                to="/compare"
                className="flex items-center gap-2 text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                <img src={Clockwise} alt="Compare" />
                <span className="hidden sm:inline">Compare</span>
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="flex items-center gap-2 text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                <img src={HeadPones} alt="Customer Support" />
                <span className="hidden sm:inline">Customer Support</span>
              </Link>
            </li>
            <li>
              <span className="flex cursor-pointer items-center gap-2 text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500">
                <img src={Info} alt="Need Help" />
                <span className="hidden sm:inline">Need Help</span>
              </span>
            </li>
            <li className="ml-auto flex items-center gap-2 text-sm text-slate-600">
              <img src={PhoneCall} alt="Phone" />
              <a
                href="tel:+12025550104"
                className="font-semibold text-slate-900"
              >
                +1-202-555-0104
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
