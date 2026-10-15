"use client";

import { useEffect } from "react";

// Marks [data-reveal] and [data-shutter] elements once they enter the viewport. Without it, CSS leaves them visible.
export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal], [data-shutter]").forEach((el) => io.observe(el));

    // The phone dock steps aside where the page already shows the numbers.
    const dock = document.querySelector(".dock");
    const seen = new Set<Element>();
    const contact = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) seen.add(e.target);
        else seen.delete(e.target);
      }
      dock?.classList.toggle("is-away", seen.size > 0);
    });
    document.querySelectorAll("#visit, .underside-wrap").forEach((el) => contact.observe(el));

    return () => {
      io.disconnect();
      contact.disconnect();
    };
  }, []);
  return null;
}
