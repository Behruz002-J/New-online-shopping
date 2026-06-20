import React, { useState, useEffect, useRef } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

interface AuthDropdownProps {
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function AuthDropdown({ onClose, triggerRef }: AuthDropdownProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      // Don't close if clicking the trigger button itself
      if (triggerRef.current && triggerRef.current.contains(e.target as Node)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Successfully signed in as: ${email}`);
      localStorage.setItem("user-email", email);
      window.dispatchEvent(new Event("auth-changed"));
      onClose();
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-3 z-50 w-[424px] h-[444px] bg-white rounded border border-[#E4E7E9] shadow-[0px_8px_40px_rgba(0,0,0,0.12)] p-8 flex flex-col justify-between text-left"
    >
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#191C1F]">
            Sign in to your account
          </h2>
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="block text-sm font-normal text-[#191C1F]">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full h-11 px-4 border rounded bg-white text-black text-sm outline-none transition-colors focus:border-[#FA8232] ${
              errors.email ? "border-red-500" : "border-[#E4E7E9]"
            }`}
            placeholder=""
          />
          {errors.email && (
            <p className="text-xs text-red-500 leading-none">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-normal text-[#191C1F]">
              Password
            </label>
            <a
              href="#"
              className="text-sm font-medium text-[#2DA5F3] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                alert("Forget Password clicked");
              }}
            >
              Forget Password
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full h-11 pl-4 pr-11 border rounded bg-white text-black text-sm outline-none transition-colors focus:border-[#FA8232] ${
                errors.password ? "border-red-500" : "border-[#E4E7E9]"
              }`}
              placeholder=""
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5F6C72] hover:text-black cursor-pointer"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 leading-none">{errors.password}</p>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="flex w-full h-12 items-center justify-center gap-2 rounded bg-[#FA8232] text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#e06f24] active:scale-[0.98] cursor-pointer"
        >
          LOGIN
          <ArrowRight className="h-5 w-5" />
        </button>

        {/* Separator */}
        <div className="relative flex items-center justify-center my-1">
          <div className="flex-grow border-t border-[#E4E7E9]"></div>
          <span className="flex-shrink mx-4 text-xs text-[#77878F] bg-white px-2">
            Don't have account
          </span>
          <div className="flex-grow border-t border-[#E4E7E9]"></div>
        </div>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={() => alert("Create Account clicked")}
          className="w-full h-12 border border-[#FFE7D6] rounded text-[#FA8232] text-sm font-bold uppercase tracking-wide hover:bg-[#FFE7D6]/20 transition-all active:scale-[0.98] cursor-pointer"
        >
          CREATE ACCOUNT
        </button>

      </form>
    </div>
  );
}
