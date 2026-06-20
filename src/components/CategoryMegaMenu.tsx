import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

// Image imports
import keyboardImg from "../assets/images/keyboard_combo.png";
import imacImg from "../assets/images/imac_blue.png";
import phoneImg from "../assets/images/s21_phone.png";
import playstationImg from "../assets/images/playstation.png";
import securityCameraImg from "../assets/images/security_camera.png";
import promoPhonesImg from "../assets/images/promo_phones.png";
import airpodsImg from "../assets/images/airpods.png";
import defaultPhoneImg from "../assets/images/phone.png";

interface FeaturedProduct {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
}

interface CategoryData {
  name: string;
  subcategories: string[];
  featuredProducts: FeaturedProduct[];
}

interface CategoryMegaMenuProps {
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function CategoryMegaMenu({ onClose, triggerRef }: CategoryMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState("SmartPhone");
  const [activeSubcategory, setActiveSubcategory] = useState("iPhone");

  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (triggerRef.current && triggerRef.current.contains(e.target as Node)) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, triggerRef]);

  // Mega menu category list and their contents
  const categoriesData: Record<string, CategoryData> = {
    "Computer & Laptop": {
      name: "Computer & Laptop",
      subcategories: ["All", "MacBook", "iMac", "Gaming Laptop", "Dell", "HP", "Lenovo", "Asus", "Acer"],
      featuredProducts: [
        {
          title: "Apple MacBook Pro 14\" M2 Pro 512GB Space Gray",
          price: "$1,999",
          image: imacImg,
        },
        {
          title: "HP Pavilion Desktop PC Tower Core i5 16GB RAM",
          price: "$649",
          image: keyboardImg,
        },
        {
          title: "ASUS ROG Zephyrus G14 Gaming Laptop RTX 4060",
          price: "$1,399",
          image: phoneImg,
        },
      ],
    },
    "Computer Accessories": {
      name: "Computer Accessories",
      subcategories: ["All", "Keyboards", "Mice", "Monitors", "Printers", "Cables", "Storage"],
      featuredProducts: [
        {
          title: "Gamdias ARES M2 Gaming Keyboard, Mouse Combo",
          price: "$89",
          image: keyboardImg,
        },
        {
          title: "Samsung 32\" Odyssey G5 Curved Gaming Monitor",
          price: "$320",
          originalPrice: "$450",
          image: imacImg,
        },
        {
          title: "SanDisk Extreme Portable SSD 1TB USB 3.2",
          price: "$119",
          image: defaultPhoneImg,
        },
      ],
    },
    "SmartPhone": {
      name: "SmartPhone",
      subcategories: ["All", "iPhone", "Sansung", "Realme", "Xiaomi", "Oppo", "Vivo", "OnePlus", "Huawei", "Infinix", "Tecno"],
      featuredProducts: [
        {
          title: "Samsung Electronics Samsung Galexy S21 5G",
          price: "$160",
          image: playstationImg, // matches Figma placeholder design
        },
        {
          title: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
          price: "$1,500",
          image: securityCameraImg, // matches Figma placeholder design
        },
        {
          title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
          price: "$2,300",
          originalPrice: "$3,200",
          image: defaultPhoneImg, // matches Figma placeholder design
        },
      ],
    },
    "Headphone": {
      name: "Headphone",
      subcategories: ["All", "Wireless Earbuds", "Noise Cancelling", "Gaming Headsets", "In-Ear", "Over-Ear"],
      featuredProducts: [
        {
          title: "Bose QuietComfort Ultra Wireless Headphones",
          price: "$379",
          image: airpodsImg,
        },
        {
          title: "Sony WH-1000XM5 Noise Cancelling Headphones",
          price: "$398",
          image: airpodsImg,
        },
        {
          title: "JBL Tune 510BT Wireless On-Ear Bluetooth",
          price: "$49",
          image: airpodsImg,
        },
      ],
    },
    "Mobile Accessories": {
      name: "Mobile Accessories",
      subcategories: ["All", "Cases", "Power Banks", "Chargers", "Screen Protectors", "Holders"],
      featuredProducts: [
        {
          title: "Anker Magnetic Wireless Power Bank 10K",
          price: "$49",
          image: defaultPhoneImg,
        },
        {
          title: "Belkin 3-in-1 Wireless Charging Stand with MagSafe",
          price: "$149",
          image: securityCameraImg,
        },
        {
          title: "Spigen Ultra Hybrid Clear Case for iPhone 15 Pro",
          price: "$19",
          image: phoneImg,
        },
      ],
    },
    "Gaming Console": {
      name: "Gaming Console",
      subcategories: ["All", "PlayStation", "Xbox", "Nintendo Switch", "Retro Consoles", "Controllers"],
      featuredProducts: [
        {
          title: "Sony PlayStation 5 Digital Edition Console",
          price: "$399",
          image: playstationImg,
        },
        {
          title: "Xbox Series X 1TB SSD Gaming Console Black",
          price: "$499",
          image: playstationImg,
        },
        {
          title: "Nintendo Switch OLED Model with White Joy-Con",
          price: "$349",
          image: defaultPhoneImg,
        },
      ],
    },
    "Camera & Photo": {
      name: "Camera & Photo",
      subcategories: ["All", "DSLR", "Mirrorless", "Point & Shoot", "Lenses", "Tripods", "Gimbals"],
      featuredProducts: [
        {
          title: "Sony Alpha a7 IV Mirrorless Digital Camera Body",
          price: "$2,499",
          image: securityCameraImg,
        },
        {
          title: "Canon EOS Rebel T7 DSLR with 18-55mm Lens",
          price: "$479",
          image: securityCameraImg,
        },
        {
          title: "DJI Osmo Mobile 6 Smartphone Gimbal Stabilizer",
          price: "$149",
          image: defaultPhoneImg,
        },
      ],
    },
    "TV & Homes Appliances": {
      name: "TV & Homes Appliances",
      subcategories: ["All", "Smart TV", "Soundbars", "Refrigerators", "Washing Machines", "Microwaves"],
      featuredProducts: [
        {
          title: "Samsung 65\" Class QLED 4K Smart TV Q60C",
          price: "$798",
          image: imacImg,
        },
        {
          title: "LG 26 cu. ft. Smart French Door Refrigerator",
          price: "$1,899",
          image: securityCameraImg,
        },
        {
          title: "Dyson V15 Detect Cordless Vacuum Cleaner",
          price: "$649",
          image: keyboardImg,
        },
      ],
    },
    "Watchs & Accessories": {
      name: "Watchs & Accessories",
      subcategories: ["All", "Smartwatches", "Analog Watches", "Straps", "Watch Cases"],
      featuredProducts: [
        {
          title: "Apple Watch Series 9 GPS 45mm Midnight Aluminum",
          price: "$429",
          image: phoneImg,
        },
        {
          title: "Samsung Galaxy Watch 6 Bluetooth 44mm",
          price: "$299",
          image: defaultPhoneImg,
        },
        {
          title: "Fossil Gen 6 Touchscreen Smartwatch Rose Gold",
          price: "$199",
          image: phoneImg,
        },
      ],
    },
    "GPS & Navigation": {
      name: "GPS & Navigation",
      subcategories: ["All", "Car GPS", "Handheld GPS", "Bike Computers", "Dash Cams"],
      featuredProducts: [
        {
          title: "Garmin DriveSmart 65 GPS Navigator with Map",
          price: "$169",
          image: securityCameraImg,
        },
        {
          title: "Nextbase 622GW Front 4K Dash Cam WiFi",
          price: "$299",
          image: securityCameraImg,
        },
        {
          title: "Garmin Edge 530 GPS Cycling Bike Computer",
          price: "$249",
          image: defaultPhoneImg,
        },
      ],
    },
    "Warable Technology": {
      name: "Warable Technology",
      subcategories: ["All", "Fitness Trackers", "Smart Rings", "VR Headsets"],
      featuredProducts: [
        {
          title: "Fitbit Charge 6 Advanced Fitness & Health Tracker",
          price: "$159",
          image: phoneImg,
        },
        {
          title: "Meta Quest 3 128GB All-In-One VR Headset",
          price: "$499",
          image: playstationImg,
        },
        {
          title: "Oura Ring Gen3 Horizon Smart Ring Black",
          price: "$349",
          image: defaultPhoneImg,
        },
      ],
    },
  };

  const categoryList = Object.keys(categoriesData);
  const currentData = categoriesData[activeCategory] || categoriesData["SmartPhone"];

  return (
    <div
      ref={menuRef}
      className="absolute left-0 right-0 top-full mt-3 z-50 bg-white rounded border border-[#E4E7E9] shadow-[0px_16px_40px_rgba(0,0,0,0.12)] flex text-left text-slate-800"
      style={{ height: "480px" }}
    >
      {/* 1. Left Categories List Panel */}
      <div className="w-[260px] border-r border-[#E4E7E9] py-4 overflow-y-auto shrink-0">
        <ul className="space-y-0.5">
          {categoryList.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <li key={cat}>
                <button
                  type="button"
                  onMouseEnter={() => {
                    setActiveCategory(cat);
                    setActiveSubcategory("All");
                  }}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSubcategory("All");
                  }}
                  className={`w-full flex items-center justify-between px-6 py-2.5 text-sm transition-colors text-left cursor-pointer ${
                    isActive
                      ? "bg-[#F2F4F5] text-[#191C1F] font-semibold"
                      : "text-[#5F6C72] hover:bg-gray-50 hover:text-[#191C1F]"
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && <ChevronRight className="h-4 w-4 text-[#5F6C72]" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 2. Middle & Right Grid Content */}
      <div className="flex-grow p-8 grid grid-cols-[200px_minmax(0,1fr)_280px] gap-8 overflow-y-auto">
        
        {/* A. Subcategory (Brands) Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191C1F] leading-none mb-2">
            Brands / Sub
          </h4>
          <ul className="space-y-1">
            {currentData.subcategories.map((sub) => {
              const isSubActive = sub === activeSubcategory;
              return (
                <li key={sub}>
                  <button
                    type="button"
                    onClick={() => setActiveSubcategory(sub)}
                    className={`w-full text-left px-4 py-2 text-sm rounded transition-colors cursor-pointer ${
                      isSubActive
                        ? "bg-[#F2F4F5] text-[#191C1F] font-semibold"
                        : "text-[#5F6C72] hover:bg-gray-50 hover:text-[#191C1F]"
                    }`}
                  >
                    {sub}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* B. Featured Products Column */}
        <div className="space-y-4 border-l border-[#E4E7E9] pl-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191C1F] leading-none mb-2">
            Featured {currentData.name.toUpperCase()}
          </h4>
          <div className="space-y-4">
            {currentData.featuredProducts.map((prod, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-3 border border-[#E4E7E9] rounded hover:shadow-sm transition-shadow bg-white"
              >
                <div className="h-[64px] w-[64px] shrink-0 flex items-center justify-center bg-[#F2F4F5] rounded overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-grow min-w-0 space-y-1">
                  <h5 className="text-sm font-normal text-[#191C1F] truncate leading-snug">
                    {prod.title}
                  </h5>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-[#2DA5F3]">
                      {prod.price}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-xs text-[#929FA5] line-through">
                        {prod.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C. Right Promotion Banner Column */}
        <div className="bg-[#FDF1BA] rounded p-6 flex flex-col justify-between items-center text-center shadow-xs">
          
          {/* Promoted Image */}
          <div className="h-[120px] w-full flex items-center justify-center overflow-hidden mb-3">
            <img
              src={promoPhonesImg}
              alt="Promo smartphones"
              className="max-h-full object-contain"
            />
          </div>

          {/* Promotion texts */}
          <div className="space-y-1.5 mb-4">
            <span className="bg-[#EBC80C]/20 text-[#9E7A00] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              21% Discount
            </span>
            <p className="text-sm font-medium text-[#191C1F] leading-snug px-1">
              Escape the noise, It's time to hear the magic with Xiaomi Earbuds.
            </p>
          </div>

          {/* Price Box */}
          <div className="w-full flex justify-center items-center gap-1.5 text-xs text-[#475156] mb-4">
            <span>Starting price:</span>
            <span className="bg-white px-3 py-1.5 rounded font-bold text-[#191C1F] shadow-2xs">
              $99 USD
            </span>
          </div>

          {/* Shop now button */}
          <button
            type="button"
            onClick={() => alert("Shop Now clicked")}
            className="w-full h-11 flex items-center justify-center gap-2 rounded bg-[#FA8232] text-xs font-bold uppercase text-white hover:bg-[#e06f24] transition-all cursor-pointer"
          >
            SHOP NOW
            <span className="text-sm">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
