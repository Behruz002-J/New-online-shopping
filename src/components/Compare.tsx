import { useState } from "react";
import { X, Heart, ShoppingCart } from "lucide-react";
import keyboardImg from "../assets/images/keyboard_combo.png";
import imacImg from "../assets/images/imac_blue.png";
import phoneImg from "../assets/images/s21_phone.png";
import { containerClass } from "./Container";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  ratingCount: string;
  soldBy: string;
  brand: string;
  model: string;
  inStock: boolean;
  size: string;
  weight: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
    image: keyboardImg,
    price: "$899.00",
    ratingCount: "51,746,385",
    soldBy: "Clicon",
    brand: "StarTech",
    model: "ARES M2 and ZEUS E2",
    inStock: true,
    size: "6.71 inches, 110.5 cm",
    weight: "650 g (7.41 oz)"
  },
  {
    id: 2,
    name: "Apple iMac 24\" 4K Retina Display M1 8 Core CPU, 8 Core GPU, 256GB SSD, Blue (MGPK3ZP/A) 2021",
    image: imacImg,
    price: "$1,699.00",
    ratingCount: "673,971,743",
    soldBy: "Apple",
    brand: "Apple",
    model: "Apple iMac 24\" M1 Blue 2021",
    inStock: true,
    size: "6.7 inches, 109.8 cm",
    weight: "240 g (8.47 oz)"
  },
  {
    id: 3,
    name: "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display.",
    image: phoneImg,
    price: "$699.99",
    ratingCount: "96,459,761",
    soldBy: "Clicon",
    brand: "Samsung",
    model: "S21 FE",
    inStock: false,
    size: "6.4 inches, 98.9 cm",
    weight: "177 g (6.24 oz)"
  }
];

export default function Compare() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const StarRating = () => (
    <div className="flex items-center gap-0.5 text-[#FA8232]">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4.5 w-4.5 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white py-12 text-slate-800">
      <div className={`${containerClass}`}>
        <h1 className="text-2xl font-semibold mb-8 text-[#191C1F]">Compare Products</h1>
        
        {products.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-lg">
            <p className="text-[#5F6C72] text-lg font-medium">No products selected for comparison.</p>
            <button
              onClick={() => setProducts(initialProducts)}
              className="mt-4 px-6 py-2 bg-[#FA8232] text-white rounded font-bold hover:bg-[#e06f24] transition-all"
            >
              Reset Comparison List
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#E4E7E9] rounded">
            <table className="w-full border-collapse text-left min-w-[900px] table-fixed">
              <thead>
                <tr>
                  {/* Left corner empty header cell */}
                  <th className="w-[180px] p-6 border-b border-[#E4E7E9] bg-white"></th>
                  {products.map((product) => (
                    <th
                      key={product.id}
                      className="p-6 border-b border-[#E4E7E9] border-l border-gray-100 bg-white relative align-top"
                    >
                      {/* Close icon button */}
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="absolute right-4 top-4 text-[#ADB7BC] hover:text-red-500 rounded-full border border-gray-200 hover:border-red-200 p-1.5 transition-colors cursor-pointer bg-white"
                        aria-label="Remove product"
                      >
                        <X className="h-4.5 w-4.5" />
                      </button>

                      {/* Image container */}
                      <div className="flex justify-center items-center h-[200px] mb-4 mt-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-normal text-[#191C1F] line-clamp-3 mb-5 leading-relaxed min-h-[60px]">
                        {product.name}
                      </h3>

                      {/* Actions */}
                      <div className="flex gap-2.5 items-center">
                        <button
                          disabled={!product.inStock}
                          className={`flex-1 h-12 flex items-center justify-center gap-2 rounded px-4 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer ${
                            product.inStock
                              ? "bg-[#FA8232] hover:bg-[#e06f24]"
                              : "bg-[#ADB7BC] cursor-not-allowed"
                          }`}
                        >
                          ADD TO CART
                          <ShoppingCart className="h-4 w-4" />
                        </button>
                        <button
                          className="h-12 w-12 flex items-center justify-center rounded border border-[#FFE7D6] hover:bg-[#FFE7D6]/20 transition-all cursor-pointer"
                          aria-label="Add to wishlist"
                        >
                          <Heart className="h-5 w-5 text-[#FA8232]" />
                        </button>
                      </div>
                    </th>
                  ))}
                  {/* Empty cells if less than 3 products */}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <th key={i} className="border-l border-gray-100 bg-white"></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Customer feedback */}
                <tr className="bg-[#F2F4F5]">
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9]">
                    Customer feedback:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4.5 text-sm border-b border-[#E4E7E9] border-l border-gray-100"
                    >
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <StarRating />
                        <span className="text-xs text-[#77878F] font-normal">
                          ({product.ratingCount})
                        </span>
                      </div>
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-[#E4E7E9] border-l border-gray-100"></td>
                  ))}
                </tr>

                {/* Price */}
                <tr>
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9]">
                    Price:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4.5 text-base font-semibold text-[#2DA5F3] border-b border-[#E4E7E9] border-l border-gray-100"
                    >
                      {product.price}
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-[#E4E7E9] border-l border-gray-100"></td>
                  ))}
                </tr>

                {/* Sold by */}
                <tr className="bg-[#F2F4F5]">
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9]">
                    Sold by:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4.5 text-sm text-[#475156] border-b border-[#E4E7E9] border-l border-gray-100"
                    >
                      {product.soldBy}
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-[#E4E7E9] border-l border-gray-100"></td>
                  ))}
                </tr>

                {/* Brand */}
                <tr>
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9]">
                    Brand:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4.5 text-sm text-[#475156] border-b border-[#E4E7E9] border-l border-gray-100 font-medium"
                    >
                      {product.brand}
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-[#E4E7E9] border-l border-gray-100"></td>
                  ))}
                </tr>

                {/* Model */}
                <tr className="bg-[#F2F4F5]">
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9]">
                    Model:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4.5 text-sm text-[#475156] border-b border-[#E4E7E9] border-l border-gray-100"
                    >
                      {product.model}
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-[#E4E7E9] border-l border-gray-100"></td>
                  ))}
                </tr>

                {/* Stock status */}
                <tr>
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9]">
                    Stock status:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className={`p-4.5 text-sm font-semibold border-b border-[#E4E7E9] border-l border-gray-100 ${
                        product.inStock ? "text-[#2DB573]" : "text-[#EE5858]"
                      }`}
                    >
                      {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-[#E4E7E9] border-l border-gray-100"></td>
                  ))}
                </tr>

                {/* Size */}
                <tr className="bg-[#F2F4F5]">
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-[#E4E7E9]">
                    Size:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4.5 text-sm text-[#475156] border-b border-[#E4E7E9] border-l border-gray-100"
                    >
                      {product.size}
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-[#E4E7E9] border-l border-gray-100"></td>
                  ))}
                </tr>

                {/* Weight */}
                <tr>
                  <td className="p-4.5 font-medium text-sm text-[#191C1F] border-b border-gray-200">
                    Weight:
                  </td>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="p-4.5 text-sm text-[#475156] border-b border-gray-200 border-l border-gray-100"
                    >
                      {product.weight}
                    </td>
                  ))}
                  {[...Array(3 - products.length)].map((_, i) => (
                    <td key={i} className="border-b border-gray-200 border-l border-gray-100"></td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
