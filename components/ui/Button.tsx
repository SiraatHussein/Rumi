import React from "react";

type Variant = "primary" | "secondary" | "danger" | string;
type Size = "sm" | "md" | "lg" | string;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}

/**
 * Button component using BEM-style modifiers:
 * - Base class: "btn"
 * - Variant modifier: "btn--{variant}"
 * - Size modifier: "btn--{size}"
 * - Full width: "btn--full" (when fullWidth === true)
 *
 * Defaults:
 * - variant = "primary"
 * - size = "md"
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...rest
}) => {
  const base = "btn";
  const variantClass = `${base}--${variant}`;
  const sizeClass = `${base}--${size}`;
  const fullClass = fullWidth ? `${base}--full` : "";

  const combinedClasses = [base, variantClass, sizeClass, fullClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;