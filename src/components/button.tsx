import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { useRipple } from "../hooks/useRipple";

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-green-600 text-white hover:bg-green-700 border-2 border-green-800",
        secondary:
          "bg-green-100 text-green-800 hover:bg-green-200 border-2 border-green-300",
        outline:
          "bg-transparent text-green-800 border-2 border-green-800 hover:bg-green-50",
        ghost:
          "bg-transparent text-green-800 hover:bg-green-100 border-2 border-transparent",
        link: "bg-transparent text-green-700 underline-offset-4 hover:underline border-2 border-transparent px-1", // link is boxy by padding, but no border
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const mergedRef = (node: HTMLButtonElement) => {
      if (typeof ref === "function") ref(node);
      else if (ref)
        (ref as React.MutableRefObject<HTMLButtonElement>).current = node;
      internalRef.current = node;
    };

    useRipple(internalRef);

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={mergedRef}
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
