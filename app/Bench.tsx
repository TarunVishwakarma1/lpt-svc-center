"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { brands, parts, waLink, type Part } from "./content";
import { ChatIcon } from "./icons";

// The base of the opened laptop, drawn in a 1000 × 620 box. Hotspots are in the same units.
const W = 1000;
const H = 620;

type Spot = { part: string; label: string; x: number; y: number; w: number; h: number; deck?: boolean; edge?: boolean };
const spots: Spot[] = [
  { part: "keyboard", label: "Keyboard", x: 52, y: 48, w: 430, h: 300, deck: true },
  { part: "keyboard", label: "Touchpad", x: 360, y: 380, w: 170, h: 190, deck: true },
  { part: "hinge", label: "Hinge", x: 110, y: 0, w: 170, h: 44, deck: true, edge: true },
  { part: "hinge", label: "Hinge", x: 720, y: 0, w: 170, h: 44, deck: true, edge: true },
  { part: "screen", label: "Display cable", x: 540, y: 34, w: 110, h: 62 },
  { part: "board", label: "Motherboard", x: 625, y: 98, w: 140, h: 140 },
  { part: "fan", label: "Fan", x: 775, y: 78, w: 190, h: 190 },
  { part: "memory", label: "RAM", x: 590, y: 250, w: 220, h: 118 },
  { part: "memory", label: "SSD", x: 812, y: 268, w: 150, h: 62 },
  { part: "speaker", label: "Speaker", x: 562, y: 402, w: 82, h: 176 },
];

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

const keyRows: { y: number; h: number; keys: number[] }[] = [
  { y: 56, h: 30, keys: Array(14).fill(56) },
  { y: 94, h: 46, keys: [...Array(13).fill(56), 96] },
  { y: 148, h: 46, keys: [84, ...Array(12).fill(56), 68] },
  { y: 202, h: 46, keys: [100, ...Array(11).fill(56), 92] },
  { y: 256, h: 46, keys: [128, ...Array(10).fill(56), 120] },
  { y: 310, h: 44, keys: [56, 56, 56, 72, 304, 72, 56, 56, 56] },
];

const keys = keyRows.flatMap((row) => {
  let x = 60;
  return row.keys.map((w) => {
    const k = { x, y: row.y, w, h: row.h };
    x += w + 8;
    return k;
  });
});

// The deck is cut away right of this line to show the board.
const cutX = (y: number) => 496 + (y * 60) / H;
const cut = `M${cutX(30)} 30 H972 V592 H${cutX(592)} Z`;

const traces: Record<string, string> = {
  screen: "M592 88 V592",
  board: "M700 220 V592",
  memory: "M760 362 V592",
  fan: "M920 256 V592",
  speaker: "M636 490 H646 V592",
};

function brandPhrase(brand: string | null) {
  if (!brand || brand === "Other brand") return "laptop";
  return brand === "MacBook" ? "MacBook" : `${brand} laptop`;
}

function panelTitle(brand: string | null, part: Part) {
  const name = part.name.toLowerCase();
  if (!brand || brand === "Other brand") return `${part.name} repairs`;
  return `${brand} ${name} repairs`;
}

export default function Bench({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>("board");
  const [brand, setBrand] = useState<string | null>(null);
  const bars = useRef<Record<string, HTMLDetailsElement | null>>({});

  const lit = (id: string) => String(active === id);

  function pick(id: string) {
    setActive(id);
    const el = bars.current[id];
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < 0 || r.top > window.innerHeight - 80) {
      const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ block: "nearest", behavior: still ? "auto" : "smooth" });
    }
  }

  return (
    <>
      <section className="wrap" aria-label="Laptop repair in Vaishali Nagar">
        <div className="laptop">
          {children}
          <div className="base">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="An opened laptop seen from above, its base cut away to show the motherboard, fan, RAM, SSD, battery and speaker">
              <defs>
                <clipPath id="left-of-cut">
                  <path d={`M0 0 H496 L556 ${H} H0 Z`} />
                </clipPath>
                <clipPath id="cut">
                  <path d={cut} />
                </clipPath>
              </defs>

              <path className="deck" d="M0 0 H1000 V588 Q1000 620 968 620 H32 Q0 620 0 588 Z" />
              <rect className="deck-2" x="0" y="0" width="1000" height="22" />

              <g clipPath="url(#left-of-cut)">
                <rect className="deck-3" x="52" y="48" width="896" height="314" rx="10" />
                <g className="part on-deck" data-lit={lit("keyboard")}>
                  {keys.map((k, i) => (
                    <rect key={i} className="pf" x={k.x} y={k.y} width={k.w} height={k.h} rx="5" />
                  ))}
                  <rect className="pf" x="372" y="388" width="256" height="176" rx="12" />
                </g>
              </g>

              <path className="pcb" d={cut} />
              <path className="deck-3" d={`M${cutX(30)} 30 H${cutX(30) + 8} L${cutX(592) + 8} 592 H${cutX(592)} Z`} />

              <g clipPath="url(#cut)">
                {Object.entries(traces).map(([id, d]) => (
                  <path key={id} className="trace" d={d} data-lit={lit(id)} />
                ))}

                <g className="part" data-lit={lit("board")}>
                  <rect className="pf2" x="575" y="128" width="32" height="18" rx="2" />
                  <rect className="pf2" x="575" y="158" width="32" height="18" rx="2" />
                  <rect className="pf2" x="575" y="188" width="32" height="18" rx="2" />
                  <rect className="pf2" x="610" y="232" width="22" height="14" rx="2" />
                  <rect className="pf" x="640" y="110" width="110" height="110" rx="8" />
                  <rect className="pf2" x="670" y="140" width="50" height="50" rx="3" />
                </g>

                <g className="part" data-lit={lit("fan")}>
                  <rect className="pf" x="748" y="154" width="60" height="28" rx="6" />
                  <circle className="pf2" cx="868" cy="170" r="86" />
                  <g className="blades">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      <path key={i} className="pf" transform={`rotate(${i * 51.4} 868 170)`} d="M868 146 c18 -22 48 -28 68 -10 c-22 -6 -42 2 -54 18 z" />
                    ))}
                  </g>
                  <circle className="pf2" cx="868" cy="170" r="22" />
                </g>

                <g className="part" data-lit={lit("memory")}>
                  {[262, 316].map((y) => (
                    <g key={y}>
                      <rect className="pf" x="600" y={y} width="200" height="44" rx="3" />
                      {[0, 1, 2, 3].map((i) => (
                        <rect key={i} className="pf2" x={614 + i * 46} y={y + 10} width="34" height="24" rx="2" />
                      ))}
                    </g>
                  ))}
                  <rect className="pf" x="818" y="276" width="140" height="46" rx="4" />
                  <rect className="pf2" x="900" y="286" width="44" height="26" rx="2" />
                </g>

                <rect className="batt" x="652" y="392" width="300" height="184" rx="10" />
                <rect className="batt-2" x="668" y="408" width="84" height="152" rx="4" />
                <rect className="batt-2" x="760" y="408" width="84" height="152" rx="4" />
                <rect className="batt-2" x="852" y="408" width="84" height="152" rx="4" />

                <g className="part" data-lit={lit("speaker")}>
                  <rect className="pf2" x="572" y="410" width="64" height="160" rx="8" />
                  {Array.from({ length: 24 }, (_, i) => (
                    <circle key={i} className="pf" cx={588 + (i % 3) * 16} cy={428 + Math.floor(i / 3) * 18} r="4" />
                  ))}
                </g>
              </g>

              <g className="part" data-lit={lit("screen")}>
                <rect className="pf" x="575" y="0" width="34" height="74" />
                <rect className="pf2" x="560" y="66" width="64" height="22" rx="3" />
              </g>

              <g className="part on-deck" data-lit={lit("hinge")}>
                <rect className="pf" x="120" y="0" width="150" height="30" rx="6" />
                <rect className="pf" x="730" y="0" width="150" height="30" rx="6" />
              </g>

              <path className="deck-2" d="M440 620 Q500 598 560 620 Z" />
            </svg>

            {spots.map((s, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className={`hot${s.deck ? " on-deck" : ""}${s.edge ? " edge" : ""}`}
                data-lit={lit(s.part)}
                style={{ left: pct(s.x, W), top: pct(s.y, H), width: pct(s.w, W), height: pct(s.h, H) }}
                onClick={() => pick(s.part)}
              >
                <span>{s.label}</span>
              </button>
            ))}
            <span className="batt-label" style={{ left: pct(664, W), top: pct(396, H) }} aria-hidden="true">
              Battery
            </span>
            <p className="sticker" aria-hidden="true">
              <span className="wide">Tap the part that&rsquo;s giving trouble.</span>
              <span className="narrow">Tap a part</span>
            </p>
          </div>
        </div>
      </section>

      <section id="repairs" className="repairs wrap" aria-labelledby="repairs-h">
        <div className="grid gap-8 content-start">
          <div className="giant-wrap" data-reveal>
            <h2 id="repairs-h" className="giant">
              Repairs
            </h2>
          </div>
          <p className="lead max-w-[34ch]" data-reveal style={{ "--i": 1 } as CSSProperties}>
            Tap the part on the laptop, or open it below. Diagnosis is free, and common jobs are usually done the same day.
          </p>
          <fieldset className="brands" data-reveal style={{ "--i": 2 } as CSSProperties}>
            <legend>Your laptop</legend>
            <div className="chips">
              {[...brands, "Other brand"].map((b) => (
                <label key={b}>
                  <input type="radio" name="brand" value={b} checked={brand === b} onChange={() => setBrand(b)} />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="bars">
          {parts.map((p, i) => (
            <details
              key={p.id}
              ref={(el) => {
                bars.current[p.id] = el;
              }}
              className="bar"
              open={active === p.id}
              onToggle={(e) => {
                if (e.currentTarget.open) setActive(p.id);
                else if (active === p.id) setActive(null);
              }}
              data-reveal
              style={{ "--i": i, "--n": p.repairs.length } as CSSProperties}
            >
              <summary>
                <i className="lamp" aria-hidden="true" />
                <span className="grid">
                  <span className="name">{p.name}</span>
                  <span className="sym">{p.symptom}</span>
                </span>
                <span className="plus" aria-hidden="true" />
              </summary>
              <div className="panel">
                <h3>{panelTitle(brand, p)}</h3>
                <ul>
                  {p.repairs.map((r) => (
                    <li key={r.item}>
                      <span>{r.item}</span>
                      {r.sameDay && <span className="same">Usually same day</span>}
                    </li>
                  ))}
                </ul>
                <label className="which">
                  Your laptop
                  <select value={brand ?? ""} onChange={(e) => setBrand(e.target.value || null)}>
                    <option value="">Choose brand</option>
                    {[...brands, "Other brand"].map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </label>
                <a className="btn btn-paper" href={waLink(`Hi, my ${brandPhrase(brand)} ${p.ask}. Can you take a look?`)}>
                  Ask about this on WhatsApp
                  <span className="cell">
                    <ChatIcon />
                  </span>
                </a>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
