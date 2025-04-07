import { useEffect } from "react";

export function useRipple(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const createRipple = (event: MouseEvent) => {
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${
        event.clientX - button.getBoundingClientRect().left - radius
      }px`;
      circle.style.top = `${
        event.clientY - button.getBoundingClientRect().top - radius
      }px`;
      circle.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];
      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    };

    button.addEventListener("click", createRipple);
    return () => button.removeEventListener("click", createRipple);
  }, [ref]);
}
