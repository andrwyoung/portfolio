import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "flex flex-row gap-1.5 items-center justify-center cursor-pointer rounded-md font-semibold transition-all" +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50" +
    "disabled:pointer-events-none px-3 py-1 duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary border-primary text-white hover:text-primary hover:bg-accent",
        secondary:
          "bg-white border-white text-primary hover:bg-accent hover:text-white",
        white:
          "bg-white text-primary-darker border-white hover:bg-secondary-lighter",
        destructive:
          "bg-rose-400 outline-2 outline-rose-400 text-white  hover:outline-rose-500 hover:bg-rose-300",
        accent: "bg-white text-primary hover:bg-white",
        outline:
          "bg-transparent outline-2 outline-white text-white hover:bg-white/30 ",
        v2: "bg-transparent outline-2 outline-mudboard-primary text-primary hover:bg-mudboard-secondary/50 ",
        mudboard:
          "bg-transparent font-mudboard-header outline-2 outline-white text-white hover:text-mudboard-accent hover:outline-mudboard-accent",
        concaly:
          "bg-concaly-secondary-lightest rounded-full outline-2 outline-concaly-secondary",
        inquiryon:
          "hover:bg-inquiryon-accent hover:text-inquiryon-accent-foreground dark:hover:bg-inquiryon-accent/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
