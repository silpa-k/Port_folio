import { useEffect, useRef, useState } from 'react';

// Tiny IntersectionObserver hook — adds `in-view` className when element scrolls in.
export default function useReveal(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return [ref, inView];
}
