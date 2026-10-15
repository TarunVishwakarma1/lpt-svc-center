import Image from "next/image";
import type { CSSProperties } from "react";
import Bench from "./Bench";
import Reveal from "./Reveal";
import ShopClock from "./ShopClock";
import Steps, { type Step } from "./Steps";
import { faqs, shop, waLink } from "./content";
import { ChatIcon, PhoneIcon, PinIcon } from "./icons";
import regulator from "@/public/photos/blown-regulator.jpg";
import heatsink from "@/public/photos/heatsink.jpg";
import internals from "@/public/photos/laptop-internals.jpg";
import keyboard from "@/public/photos/keyboard.jpg";
import keyboardDark from "@/public/photos/keyboard-dark.jpg";
import ram from "@/public/photos/ram-modules.jpg";
import soldering from "@/public/photos/soldering-0805.jpg";
import vaishali from "@/public/photos/vaishali-nagar.jpg";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

const steps: Step[] = [
  {
    title: "Message or call us",
    text: "Send the laptop's model and what's wrong. A photo helps.",
    img: keyboard,
    alt: "Close-up of a laptop keyboard",
    gap: 6,
  },
  {
    title: "Drop in, or we come to you",
    text: "Visit shop G-9, Monday to Saturday, or book doorstep service in Jaipur.",
    img: vaishali,
    alt: "Rooftop view over Vaishali Nagar, Jaipur",
    gap: 3.5,
  },
  {
    title: "Free diagnosis",
    text: "We open it up, find the fault and tell you the cost. Checking costs nothing.",
    img: internals,
    alt: "Inside an opened laptop: fan, SSD, RAM and battery",
    gap: 8,
  },
  {
    title: "You approve the price",
    text: "Nothing is repaired until you say yes to the quote.",
    img: ram,
    alt: "Two RAM modules on a laptop motherboard",
    gap: 5,
  },
  {
    title: "The repair",
    text: "Common jobs are usually done the same day. Board work takes longer, and you get a time.",
    img: soldering,
    alt: "Tweezers placing a tiny component on a circuit board",
    gap: 7,
  },
  {
    title: "Back to you, with a warranty",
    text: "Collect it from G-9 or have it brought back, with a warranty on the repair.",
    img: keyboardDark,
    alt: "A laptop keyboard glowing in a dark room",
    gap: 4,
  },
];

export default function Home() {
  return (
    <>
      <main className="sheet">
        <header className="top wrap">
          <a className="mark" href="#top" aria-label={`${shop.brand}, home`}>
            <b>ILS IT</b>
            <span>Laptop Solution</span>
          </a>
          <nav aria-label="Sections">
            <a href="#repairs">Repairs</a>
            <a href="#doorstep">Doorstep</a>
            <a href="#questions">Questions</a>
            <a href="#visit">Visit</a>
          </nav>
          <a className="btn btn-paper" href={waLink()}>
            WhatsApp
            <span className="cell">
              <ChatIcon />
            </span>
          </a>
        </header>

        <div id="top">
          <Bench>
            <div className="lid">
              <div className="screen">
                <h1 className="display lines-mask">
                  <span className="ln">
                    <span style={i(0)}>Laptop repair in</span>
                  </span>{" "}
                  <span className="ln">
                    <span style={i(1)}>Vaishali Nagar</span>
                  </span>
                </h1>
                <p className="lead" data-rise style={i(4)}>
                  Motherboard repair for Dell, HP, Lenovo, Asus, MSI and MacBook. Free diagnosis, warranty on repairs, doorstep service in Jaipur.
                </p>
                <p className="where" data-rise style={i(5)}>
                  <span>G-9, Prestige Tower, near Amrapali Circle</span>
                  <i className="dia" aria-hidden="true" />
                  <span>Mon–Sat, 10 AM – 8 PM</span>
                </p>
                <div className="actions" data-rise style={i(6)}>
                  <a className="btn btn-paper" href={waLink()}>
                    WhatsApp us
                    <span className="cell">
                      <ChatIcon />
                    </span>
                  </a>
                  <a className="textlink" href={shop.call.href}>
                    Call {shop.call.display}
                  </a>
                </div>
                <ShopClock />
              </div>
              <p className="bezel">{shop.name}</p>
            </div>
          </Bench>
        </div>

        <section id="board" className="plate wrap" aria-labelledby="board-h">
          <figure data-shutter>
            <Image src={regulator} alt="A burnt power regulator on a laptop motherboard, seen under a microscope" sizes="(min-width: 900px) 50vw, 100vw" />
            <span className="loupe" aria-hidden="true" />
            <figcaption>A burnt regulator: one part, not a dead laptop.</figcaption>
          </figure>
          <div className="side">
            <div className="grid gap-6" data-reveal style={i(1)}>
              <h2 id="board-h" className="head">
                We repair the board
              </h2>
              <fieldset className="symptoms">
                <legend className="sr-only">What happened to your laptop?</legend>
                <label>
                  <input type="radio" name="symptom" id="sym-power" defaultChecked />
                  No power
                </label>
                <label>
                  <input type="radio" name="symptom" id="sym-display" />
                  No display
                </label>
                <label>
                  <input type="radio" name="symptom" id="sym-spill" />
                  Liquid spill
                </label>
              </fieldset>
              <div className="answers lead" aria-live="polite">
                <p data-sym="power">
                  A laptop that shows no sign of life usually has one failed part on its motherboard. We trace it and replace that part, which is often cheaper than a new board.
                </p>
                <p data-sym="display">
                  Power light on, screen dark? The fault can be the screen, its cable or the display circuit on the board. We test each one before we quote.
                </p>
                <p data-sym="spill">
                  Liquid corrodes a board slowly. Switch the laptop off, don&rsquo;t charge it, and bring it in. Cleaned and repaired early, a spilled laptop often survives.
                </p>
              </div>
            </div>
            <div className="cells" data-reveal style={i(2)}>
              <a className="ink" href={waLink("Hi, I'd like a motherboard repair quote. I'll send a photo of the laptop.")}>
                WhatsApp a photo
                <ChatIcon />
              </a>
              <a className="tone" href={shop.call.href}>
                Call {shop.call.display}
                <PhoneIcon />
              </a>
            </div>
          </div>
        </section>

        <section id="doorstep" className="steps wrap" aria-labelledby="steps-h">
          <Steps steps={steps} />
        </section>

        <section id="questions" className="faq wrap" aria-labelledby="faq-h">
          <h2 id="faq-h" className="head" data-reveal>
            Plain answers
          </h2>
          <div className="text">
            {faqs.map((f, n) => (
              <p key={f.q} data-reveal style={i(n % 4)}>
                <b>{f.q}</b> {f.a}
              </p>
            ))}
          </div>
        </section>

        <section id="visit" className="visit" aria-labelledby="visit-h">
          <div className="photo">
            <Image src={vaishali} alt="Vaishali Nagar, Jaipur, seen from a rooftop" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="card">
            <h2 id="visit-h" className="head">
              Find us at G-9
            </h2>
            <address className="not-italic">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <dl className="tabular">
              {shop.hours.map((h) => (
                <div key={h.days} className="contents">
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
              <div className="contents">
                <dt>Call</dt>
                <dd>
                  <a href={shop.call.href}>{shop.call.display}</a>
                </dd>
              </div>
              <div className="contents">
                <dt>WhatsApp</dt>
                <dd>
                  <a href={waLink()}>{shop.whatsapp.display}</a>
                </dd>
              </div>
            </dl>
            <p className="note">Photo: Vaishali Nagar from a rooftop, 2008.</p>
            <a className="btn btn-deep go" href={shop.maps} target="_blank" rel="noopener">
              Get directions
              <span className="cell">
                <PinIcon />
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="underside-wrap">
        <div className="underside">
          <i className="foot" style={{ left: "8%", top: "1.25rem" }} aria-hidden="true" />
          <i className="foot" style={{ right: "8%", top: "1.25rem" }} aria-hidden="true" />
          <i className="foot" style={{ left: "8%", bottom: "1.25rem" }} aria-hidden="true" />
          <i className="foot" style={{ right: "8%", bottom: "1.25rem" }} aria-hidden="true" />

          <div className="grid content-start gap-5">
            <div className="vents" aria-hidden="true">
              {Array.from({ length: 12 }, (_, n) => (
                <i key={n} />
              ))}
            </div>
            <h2 className="head">See you at G-9</h2>
            <p className="max-w-[36ch]">
              Bring the laptop, the charger if you have it, and tell {shop.person.split(" ")[0]} what happened. Diagnosis is free.
            </p>
          </div>

          <div className="grid content-start gap-6">
            <div className="label">
              <Image src={heatsink} alt="A laptop fan and heatsink" sizes="88px" />
              <p className="small">
                <b className="block">{shop.brand}</b>
                {shop.name}
                <br />
                Ask for {shop.person}
              </p>
            </div>
            <div className="lines">
              <a href={shop.call.href}>Call {shop.call.display}</a>
              <a href={waLink()}>WhatsApp {shop.whatsapp.display}</a>
              <a href={shop.maps} target="_blank" rel="noopener">
                {shop.addressLines.join(", ")}
              </a>
              <span>Monday to Saturday, 10 AM – 8 PM. Sunday closed.</span>
            </div>
          </div>

          <p className="imprint">
            © 2026 {shop.brand}. Pictures: <a href="https://commons.wikimedia.org/wiki/File:VaishaliNagarJaipur.JPG">“VaishaliNagarJaipur”</a> by Tusharnigam, public domain;{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Microscope_close-up_of_blown_step-down_regulator_on_laptop_PCB.jpg">“Microscope close-up of blown step-down regulator on laptop PCB”</a> by Profpcde, CC0;{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Soldering_a_0805.jpg">“Soldering a 0805”</a> by Aisart, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>;{" "}
            <a href="https://stocksnap.io/photo/laptop-keyboard-DLVKWMG6O2">“Laptop Keyboard”</a> by Lenharth Systems, CC0;{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Framework_Laptop_13_-_2023_AMD_Ryzen_-_Internal_motherboard_and_component_view.jpg">“Framework Laptop 13 internal view”</a> by Ogidya, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>;{" "}
            <a href="https://stocksnap.io/photo/laptop-keyboard-QGU10TMNPE">“Laptop Keyboard”</a> by One Idea LLC, CC0;{" "}
            <a href="https://commons.wikimedia.org/w/index.php?curid=93094184">“Laptop Heatsink”</a> by Saud, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>;{" "}
            <a href="https://wordpress.org/photos/photo/8806a6146f/">“Two SODIMM RAM modules”</a> by dumanag, CC0. All via Wikimedia Commons, StockSnap or the WordPress Photo Directory; none show this shop.
          </p>
        </div>
      </footer>

      <nav className="dock" aria-label="Contact the shop">
        <a className="call" href={shop.call.href}>
          <PhoneIcon />
          Call
        </a>
        <a className="wa" href={waLink()}>
          <ChatIcon />
          WhatsApp
        </a>
      </nav>

      <Reveal />
    </>
  );
}
