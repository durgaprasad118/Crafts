/*
 *
 * TODO: - Variants : Primary, Secondary, Outline(or teritary or solid)
 * TODO: Sizes: small, medium and large
 * TODO: stretch(boolean) for entire div or not
 * TODO: icon {leading icon:ReactNode; position:right or left}
 * TODO:
 * */

import { cn } from "../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  strecth?: boolean;
  leadingIcon?: React.ReactNode;
  iconPosition?: "right" | "left";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  children,
  variant = "primary",
  size = "medium",
  strecth = false,
  leadingIcon,
  iconPosition = "left",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex flex-row items-center justify-center border",
        size === "small" && "px-3 py-2 rounded-md gap-1.5 text-sm",
        size === "medium" && "px-6 py-2 rounded-lg gap-2 text-base",
        size === "large" && "px-6 py-3 rounded-xl gap-2.5 text-lg",
        variant === "primary" &&
          "bg-blue-500 hover:bg-blue-600 text-white border-transparent",
        variant === "secondary" &&
          "bg-zinc-800 hover:bg-zinc-900 border-transparent text-white",
        variant === "outline" &&
          "bg-white hover:bg-zinc-100 border-zinc-600 text-zinc-800 ",
        strecth && "w-full",
      )}
      {...props}
    >
      {iconPosition === "left" && leadingIcon}
      {children}
      {iconPosition === "right" && leadingIcon}
    </button>
  );
};

export { Button };
