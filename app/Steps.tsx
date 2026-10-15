"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState, type CSSProperties } from "react";
import { LeftIcon, RightIcon } from "./icons";

export type Step = { title: string; text: string; img: StaticImageData; alt: string; gap: number };

export default function Steps({ steps }: { steps: Step[] }) {
  const row = useRef<HTMLOListElement>(null);
  const [p, setP] = useState(0);

  function onScroll() {
    const el = row.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setP(max > 0 ? el.scrollLeft / max : 1);
  }

  function nudge(dir: number) {
    const el = row.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.clientWidth + 24), behavior: still ? "auto" : "smooth" });
  }

  return (
    <>
      <div className="steps-top">
        <h2 id="steps-h" className="head" data-reveal>
          How a repair goes
        </h2>
        <div className="arrows">
          <button type="button" onClick={() => nudge(-1)} disabled={p <= 0.01} aria-label="Previous step">
            <LeftIcon />
          </button>
          <button type="button" onClick={() => nudge(1)} disabled={p >= 0.99} aria-label="Next step">
            <RightIcon />
          </button>
        </div>
      </div>
      <div className="progress" aria-hidden="true">
        <i style={{ "--p": Math.max(p, 0.08) } as CSSProperties} />
      </div>
      <ol className="row" ref={row} onScroll={onScroll} aria-labelledby="steps-h">
        {steps.map((s, i) => (
          <li key={s.title} data-reveal style={{ "--i": i } as CSSProperties}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="gap" style={{ "--gap": `${s.gap}rem` } as CSSProperties} />
            <figure>
              <Image src={s.img} alt={s.alt} sizes="(min-width: 768px) 288px, 72vw" />
            </figure>
          </li>
        ))}
      </ol>
    </>
  );
}
