import { type ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "font-medium md:text-lg whitespace-nowrap transition-all duration-500 rounded-full",
  variants: {
    type: {
      contained: "text-gray-100 bg-primary-purple-light px-6 h-12 md:h-14",
      text: "text-gray-100 underline underline-offset-2 group-hover:decoration-gray-100 decoration-gray-900",
      nav: "h-12 border-2 border-primary-purple-light px-6 text-primary-purple-light hover:bg-primary-purple-light hover:text-gray-100 hover:shadow-2xl hover:shadow-primary-purple-light md:h-14"
    }
  },
  defaultVariants: {
    type: "contained"
  }
});

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof button>;
}

export function Button({ variant, ...props }: IButton) {
  return <button {...props} className={button(variant)} />;
}
