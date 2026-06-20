import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { containerClass } from "./Container";

const CliconLogo = () => (
  <svg
    width="177"
    height="48"
    viewBox="0 0 177 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-auto"
  >
    {/* Orange Circle brand icon */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
      fill="#FA8232"
    />
    {/* White "CLICON" Text */}
    <path
      d="M68.016 12.544C69.7547 12.544 71.3013 12.896 72.656 13.6C74.0213 14.2933 75.12 15.2427 75.952 16.448C76.7947 17.6533 77.2907 19.0133 77.44 20.528H72.544C72.3947 19.728 72.1227 19.0187 71.728 18.4C71.3333 17.7707 70.816 17.28 70.176 16.928C69.536 16.5653 68.768 16.384 67.872 16.384C66.7947 16.384 65.8667 16.6453 65.088 17.168C64.3093 17.6907 63.712 18.5333 63.296 19.696C62.88 20.8587 62.672 22.3947 62.672 24.304C62.672 27.184 63.1307 29.2693 64.048 30.56C64.976 31.84 66.2507 32.48 67.872 32.48C68.768 32.48 69.536 32.2773 70.176 31.872C70.816 31.456 71.3333 30.912 71.728 30.24C72.1227 29.5573 72.3947 28.8107 72.544 28H77.44C77.3013 29.0987 77.0347 30.1493 76.64 31.152C76.2453 32.144 75.6853 33.0293 74.96 33.808C74.2347 34.5867 73.3013 35.2 72.16 35.648C71.0187 36.096 69.6373 36.32 68.016 36.32C65.8613 36.32 64 35.8187 62.432 34.816C60.864 33.8133 59.6533 32.4053 58.8 30.592C57.9573 28.7787 57.536 26.6613 57.536 24.24C57.536 21.808 57.9573 19.7227 58.8 17.984C59.6427 16.2347 60.848 14.8907 62.416 13.952C63.984 13.0133 65.8507 12.544 68.016 12.544ZM80.9208 12.864H85.6248V32.048H95.6728V36H80.9208V12.864ZM98.7495 12.864H103.406V36H98.7495V12.864ZM117.377 12.544C119.116 12.544 120.663 12.896 122.017 13.6C123.383 14.2933 124.481 15.2427 125.313 16.448C126.156 17.6533 126.652 19.0133 126.801 20.528H121.905C121.756 19.728 121.484 19.0187 121.089 18.4C120.695 17.7707 120.177 17.28 119.537 16.928C118.897 16.5653 118.129 16.384 117.233 16.384C116.156 16.384 115.228 16.6453 114.449 17.168C113.671 17.6907 113.073 18.5333 112.657 19.696C112.241 20.8587 112.033 22.3947 112.033 24.304C112.033 27.184 112.492 29.2693 113.409 30.56C114.337 31.84 115.612 32.48 117.233 32.48C118.129 32.48 118.897 32.2773 119.537 31.872C120.177 31.456 120.695 30.912 121.089 30.24C121.484 29.5573 121.756 28.8107 121.905 28H126.801C126.663 29.0987 126.396 30.1493 126.001 31.152C125.607 32.144 125.047 33.0293 124.321 33.808C123.596 34.5867 122.663 35.2 121.521 35.648C120.38 36.096 118.999 36.32 117.377 36.32C115.223 36.32 113.361 35.8187 111.793 34.816C110.225 33.8133 109.015 32.4053 108.161 30.592C107.319 28.7787 106.897 26.6613 106.897 24.24C106.897 21.808 107.319 19.7227 108.161 17.984C109.004 16.2347 110.209 14.8907 111.777 13.952C113.345 13.0133 115.212 12.544 117.377 12.544ZM139.898 36.32C137.711 36.32 135.818 35.8453 134.218 34.896C132.629 33.936 131.397 32.576 130.522 30.816C129.658 29.0453 129.226 26.9333 129.226 24.48C129.226 22.016 129.663 19.8933 130.538 18.112C131.423 16.3307 132.666 14.96 134.266 14C135.866 13.0293 137.743 12.544 139.898 12.544C142.042 12.544 143.909 13.024 145.498 13.984C147.087 14.944 148.314 16.3147 149.178 18.096C150.053 19.8773 150.49 22.0053 150.49 24.48C150.49 26.9227 150.058 29.0293 149.194 30.8C148.341 32.5707 147.119 33.936 145.53 34.896C143.941 35.8453 142.063 36.32 139.898 36.32ZM139.898 32.48C141.029 32.48 142.005 32.2133 142.826 31.68C143.658 31.136 144.298 30.2827 144.746 29.12C145.194 27.9467 145.418 26.4213 145.418 24.544C145.418 22.6133 145.189 21.0507 144.73 19.856C144.282 18.6613 143.642 17.7867 142.81 17.232C141.989 16.6667 141.018 16.384 139.898 16.384C138.778 16.384 137.802 16.6667 136.97 17.232C136.138 17.7867 135.493 18.6667 135.034 19.872C134.575 21.0667 134.346 22.624 134.346 24.544C134.346 26.432 134.575 27.9573 135.034 29.12C135.493 30.2827 136.138 31.136 136.97 31.68C137.802 32.2133 138.778 32.48 139.898 32.48ZM169.17 12.864H173.842V36H169.634L158.642 20.08V36H153.986V12.864H158.61L169.17 28.176V12.864Z"
      fill="white"
    />
  </svg>
);

function Footer() {
  const popularTags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card", // Active tag
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  return (
    <footer className="w-full bg-[#191c1f] text-gray-300 pt-16 pb-6 font-sans">
      <div className={`${containerClass} pb-12 border-b border-[#2d3135]`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1 lg:max-w-[280px]">
            <Link to="/" className="inline-block">
              <CliconLogo />
            </Link>
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="text-gray-400 text-xs font-normal">
                Customer Supports:
              </span>
              <a
                href="tel:6295550129"
                className="text-white text-lg font-medium hover:text-[#FA8232] transition-colors"
              >
                (629) 555-0129
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              4517 Washington Ave.
              <br />
              Manchester, Kentucky 39495
            </p>
            <a
              href="mailto:info@kinbo.com"
              className="text-white text-sm font-medium hover:text-[#FA8232] transition-colors"
            >
              info@kinbo.com
            </a>
          </div>

          {/* Column 2: Top Category */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Top Category
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  to="/shoppage"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Computer & Laptop
                </Link>
              </li>
              <li>
                <Link
                  to="/shoppage"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SmartPhone
                </Link>
              </li>
              <li>
                <Link
                  to="/shoppage"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Headphone
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#FA8232]"></span>
                <Link to="/shoppage" className="text-white font-medium">
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/shoppage"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Camera & Photo
                </Link>
              </li>
              <li>
                <Link
                  to="/shoppage"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TV & Homes
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  to="/shoppage"
                  className="text-[#EBC80A] font-semibold flex items-center gap-1.5 hover:brightness-110 transition-all"
                >
                  Browse All Product{" "}
                  <ArrowRight size={16} className="pt-[1px]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <Link to="/shoppage" className="hover:text-white transition-colors">
                  Shop Product
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-white transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/trackorder" className="hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  Customer Help
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Download App
            </h3>
            <div className="flex flex-col gap-3">
              {/* Google Play Button */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#24292d] hover:bg-[#2c3237] border border-[#2d3135] text-white flex items-center gap-3 px-4 py-3 rounded-sm transition-colors w-full xl:w-[176px]"
              >
                {/* Google Play Icon path SVG */}
                <svg
                  className="w-5 h-5 text-white flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.782 12 3.609 22.186A2.227 2.227 0 0 1 3 20.598V3.402c0-.66.223-1.258.609-1.588zm11.29 9.068l2.903-1.66c1.173-.67 1.173-1.764 0-2.434l-2.903-1.66-3.262 3.26 3.262 3.494zm-4.381 1.229l-3.327-3.327-3.35 3.35a2.203 2.203 0 0 0 1.959 1.959l4.718-2.696" />
                </svg>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] text-gray-400 font-normal uppercase">
                    Get it now
                  </span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="https://www.apple.com/app-store"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#24292d] hover:bg-[#2c3237] border border-[#2d3135] text-white flex items-center gap-3 px-4 py-3 rounded-sm transition-colors w-full xl:w-[176px]"
              >
                {/* Apple Icon path SVG */}
                <svg
                  className="w-5 h-5 text-white flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.13.67-2.85 1.51-.62.73-1.16 1.87-1.01 2.98 1.1.09 2.15-.55 2.87-1.43z" />
                </svg>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] text-gray-400 font-normal uppercase">
                    Get it now
                  </span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 5: Popular Tag */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Popular Tag
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => {
                const isActive = tag === "Graphics Card";
                return (
                  <Link
                    key={tag}
                    to="/shoppage"
                    className={`px-3 py-1.5 rounded-sm text-xs transition-all duration-200 ${
                      isActive
                        ? "border border-white text-white bg-transparent font-medium"
                        : "border border-[#2d3135] text-gray-300 bg-transparent hover:text-white hover:border-gray-400 hover:bg-zinc-800"
                    }`}
                  >
                    {tag}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className={`${containerClass} pt-6 flex items-center justify-center`}>
        <p className="text-gray-500 text-xs text-center font-normal leading-relaxed">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </p>
      </div>
    </footer>
  );
}

export default Footer;