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
import PhoneCall from "../assets/icons/PhoneCall.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown, House, Menu,ChevronRight } from "lucide-react";
import { containerClass } from "./Container";
import AuthDropdown from "./AuthDropdown";

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5.25 21.75H18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompareIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M7.48126 9.34668H2.98126V4.84668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.8313 6.16885C17.0659 5.40236 16.1569 4.79429 15.1563 4.37941C14.1558 3.96453 13.0832 3.75098 12 3.75098C10.9168 3.75098 9.84427 3.96453 8.84369 4.37941C7.8431 4.79429 6.93413 5.40236 6.16876 6.16885L2.98126 9.34698" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5187 14.6533H21.0187V19.1533" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.16876 17.8314C6.93413 18.5979 7.8431 19.206 8.84368 19.6209C9.84427 20.0358 10.9168 20.2493 12 20.2493C13.0832 20.2493 14.1558 20.0358 15.1563 19.6209C16.1569 19.206 17.0659 18.5979 17.8313 17.8314L21.0188 14.6533" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SupportIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21.1406 12.7503H18.1406C17.7428 12.7503 17.3613 12.9083 17.08 13.1897C16.7987 13.471 16.6406 13.8525 16.6406 14.2503V18.0003C16.6406 18.3981 16.7987 18.7797 17.08 19.061C17.3613 19.3423 17.7428 19.5003 18.1406 19.5003H19.6406C20.0384 19.5003 20.42 19.3423 20.7013 19.061C20.9826 18.7797 21.1406 18.3981 21.1406 18.0003V12.7503ZM21.1406 12.7503C21.1407 11.5621 20.9054 10.3856 20.4484 9.28875C19.9915 8.1919 19.3218 7.1964 18.4781 6.35969C17.6344 5.52297 16.6334 4.86161 15.5328 4.41375C14.4322 3.96589 13.2538 3.74041 12.0656 3.75031C10.8782 3.74165 9.70083 3.96805 8.60132 4.41647C7.5018 4.86488 6.50189 5.52645 5.6592 6.36304C4.81651 7.19963 4.1477 8.19471 3.69131 9.29094C3.23492 10.3872 2.99997 11.5629 3 12.7503V18.0003C3 18.3981 3.15804 18.7797 3.43934 19.061C3.72064 19.3423 4.10218 19.5003 4.5 19.5003H6C6.39782 19.5003 6.77936 19.3423 7.06066 19.061C7.34196 18.7797 7.5 18.3981 7.5 18.0003V14.2503C7.5 13.8525 7.34196 13.471 7.06066 13.1897C6.77936 12.9083 6.39782 12.7503 6 12.7503H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HelpIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);


export default function Navbar() {
  const location = useLocation();
  const isShopPage = location.pathname === "/shoppage";
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const authTriggerRef = useRef<HTMLButtonElement>(null);

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

  return (
    <header className="w-full bg-[#1b6392] text-white">
      <div className="w-full bg-zinc-900 text-white h-[80px] pt-[16px]">
        <div
          className={`${containerClass} flex h-12 items-center justify-between`}
        >
          <div className="flex items-center gap-3">
            <img src={Black} alt="" />
            <span className="text-sm font-medium tracking-wide">Friday</span>
          </div>

          <div className="hidden flex-1 justify-center items-center gap-2 sm:flex">
            <span className="text-[14px] leading-none pt-[4px]">Up to</span>
            <span className="text-4xl font-bold leading-none tracking-tight text-yellow-400">
              59%
            </span>
            <span className="text-[20px] font-semibold leading-none pt-[4px]">
              OFF
            </span>
          </div>

          <div className="flex items-center gap-4">
            {!isShopPage ? (
              <Link
                to="/shoppage"
                className="flex h-10 w-[134px] items-center justify-center gap-2 whitespace-nowrap rounded-none bg-[#f5d20a] text-xs font-extrabold uppercase text-[#191c1f] transition-colors hover:bg-[#eac800]"
              >
                SHOP NOW
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
            ) : null}
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
        className={`${containerClass} flex h-[80px] items-center justify-between`}
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
          <div className="relative">
            <button
              ref={authTriggerRef}
              onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
              aria-label="Account"
              className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-white/40 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <img src={User} alt="User" className="h-5 w-5" />
            </button>
            {isAuthDropdownOpen && (
              <AuthDropdown
                onClose={() => setIsAuthDropdownOpen(false)}
                triggerRef={authTriggerRef}
              />
            )}
          </div>
        </div>
      </div>

      <div className="bg-white text-slate-700">
        <nav aria-label="Utilities" className={containerClass}>
          <ul className="flex items-center gap-4 py-3 text-sm">
            <li>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                <Menu className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium">All Category</span>
                <ChevronDown className="h-4 w-4 text-slate-500" />
              </button>
            </li>
            <li>
              <Link
                to="/trackorder"
                className={`flex items-center gap-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 ${
                  location.pathname === "/trackorder"
                    ? "text-[#FA8232]"
                    : "text-[#5F6C72] hover:text-[#FA8232]"
                }`}
              >
                <MapPinIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Track Order</span>
              </Link>
            </li>
            <li>
              <Link
                to="/compare"
                className={`flex items-center gap-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 ${
                  location.pathname === "/compare"
                    ? "text-[#FA8232]"
                    : "text-[#5F6C72] hover:text-[#FA8232]"
                }`}
              >
                <CompareIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Compare</span>
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={`flex items-center gap-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 ${
                  location.pathname === "/support"
                    ? "text-[#FA8232]"
                    : "text-[#5F6C72] hover:text-[#FA8232]"
                }`}
              >
                <SupportIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Customer Support</span>
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className={`flex items-center gap-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 ${
                  location.pathname === "/help"
                    ? "text-[#FA8232]"
                    : "text-[#5F6C72] hover:text-[#FA8232]"
                }`}
              >
                <HelpIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Need Help</span>
              </Link>
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

         <div className="bg-gray-100 py-6">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-sm">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-blue-500"
        >
          <House size={16} />
          <span>Home</span>
        </Link>

        <ChevronRight size={16} className="text-gray-400" />

        <span className="text-gray-500">Pages</span>

        <ChevronRight size={16} className="text-gray-400" />

        <Link to={"/trackorder"} className="font-medium text-sky-500">Track Order</Link>
      </div>
    </div>
      </div>
    </header>
  );
}
