import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "flex flex-row gap-1.5 items-center justify-center cursor-pointer rounded-md  transition-all" +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50" +
    "disabled:pointer-events-none duration-300",
  {
    variants: {
      variant: {
        mudboard:
          "text-md px-3 py-1 bg-transparent font-mudboard-header font-semibold outline-2 outline-white text-white hover:text-mudboard-accent hover:outline-mudboard-accent",
        concaly:
          "text-md px-3 py-1  text-concaly-primary-text font-semibold bg-concaly-secondary-lightest rounded-lg outline-2 outline-concaly-secondary hover:bg-concaly-secondary",
        inquiryon:
          "text-md px-4 py-1 font-medium text-inquiryon-primary bg-inquiryon-accent hover:bg-inquiryon-accent hover:text-inquiryon-accent-foreground ",
        pct: "font-semibold hover:underline hover:text-pct-accent",
        jonadrew:
          "font-bold px-4 py-0.5  border-2 bg-jonadrew-accent border-jonadrew-accent hover:border-jonadrew-secondary hover:bg-jonadrew-accent/80",
      },
    },
    defaultVariants: {
      variant: "concaly",
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
