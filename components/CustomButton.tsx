"use client";

import Image from "next/image";

interface CustomButtonProps {
  title: string,
  onButtonClick?: () => void,
  type: "button" | "submit" | "reset" | undefined,
  className: string,
  rightIcon?: string
}
const CustomButton = ({ title, onButtonClick, type, className, rightIcon }: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={onButtonClick}
      className={`custom-btn ${className}`}
    >
      <span>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="button right icon"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton