import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import '../css/button.css'

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary border-border duration-300 transition-all ease-in-out",
        success:
          "bg-success hover:bg-success border-border duration-300 transition-all ease-in-out",
        danger:
          "bg-danger hover:bg-danger border-border duration-300 transition-all ease-in-out",
        accent:
          "bg-accent hover:bg-accent text-accent duration-300 transition-all ease-in-out",
        outline:
          "bg-[#00000000] hover:bg-[#f1eedc] border-border duration-300 transition-all ease-in-out",
        ghost:
          "bg-[#00000000] text-primary hover:bg-[#f1eedc] border-2 border-transparent",
        link:
          "bg-transparent text-primary underline-offset-4 hover:underline border-2 border-transparent px-1",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }) => {

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "relative overflow-hidden",
          buttonVariants({ variant, size }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
