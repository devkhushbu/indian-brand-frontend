import { useState, useEffect, useRef } from "react";

/**
 * A custom hook to handle hover states on both Desktop and Mobile Touch devices.
 * It provides the state, a ref to attach to the target element, and the necessary event handlers.
 * It also includes a click-outside listener to automatically close the hover state on mobile.
 */
export function useTouchHover<T extends HTMLElement>() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    if (isHovered) {
      document.addEventListener("mousedown", handleOutsideInteraction);
      document.addEventListener("touchstart", handleOutsideInteraction);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
    };
  }, [isHovered]);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onTouchStart: () => setIsHovered((prev) => !prev),
  };

  return { isHovered, ref, hoverProps };
}
