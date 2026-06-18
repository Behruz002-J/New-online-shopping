import { ChevronRight, House } from "lucide-react";
import { containerClass } from "./Container";
export default function BreadCrumb() {
  return (
    <main>
      <section>
        <div className="bg-[#F2F4F5] py-4">
          <div className={`${containerClass} flex items-center gap-3 text-sm`}>
            <House size={18} className="text-[#5F6C72]" />

            <span className="text-[#5F6C72]">Home</span>

            <ChevronRight size={16} className="text-[#5F6C72]" />

            <span className="text-[#5F6C72]">Shop</span>

            <ChevronRight size={16} className="text-[#5F6C72]" />

            <span className="text-[#5F6C72]">Shop Grid</span>

            <ChevronRight size={16} className="text-[#5F6C72]" />

            <span className="text-[#2DA5F3] font-medium">
              Electronics Devices
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
