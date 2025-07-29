import { useEffect, useRef } from "preact/hooks";
import "./index.css";

export const useScrollTrigger = (animation: "fade-in-bottom" | "fade-in-left" | "fade-in-right" | null = null) => {
  const scrolledClassName = "scrolled"
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("js-scroll");
    animation && el.classList.add(animation);
    
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(scrolledClassName);
        } else {
          el.classList.remove(scrolledClassName);
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      // Optionally clean up the class
      el.classList.remove("js-scroll");
      animation && el.classList.remove(animation);
      el.classList.remove(scrolledClassName);
    };
  }, [scrolledClassName]);

  return ref;
}
