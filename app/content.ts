// Every fact on the site lives here. Source: Google listing, shop signage and the owner's answers (Oct 2026).
// Do not add prices, warranty length or reviews until the shop confirms them.

export const shop = {
  brand: "ILS IT Laptop Solution",
  name: "Laptop Service Center",
  person: "Ravi Sharma",
  unit: "G-9",
  addressLines: ["G-9, Prestige Tower", "Near Amrapali Circle, Vaishali Nagar", "Jaipur, Rajasthan 302021"],
  call: { display: "95301 08015", href: "tel:+919530108015" },
  whatsapp: { display: "91661 80390", number: "919166180390" },
  hours: [
    { days: "Monday to Saturday", time: "10 AM – 8 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  maps: "https://www.google.com/maps/search/?api=1&query=Laptop+Service+Center+G-9+Prestige+Tower+Amrapali+Circle+Vaishali+Nagar+Jaipur",
};

export const waLink = (text = "Hi, I need help with my laptop.") =>
  `https://wa.me/${shop.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const brands = ["Dell", "HP", "Lenovo", "Asus", "MSI", "MacBook", "Alienware"];

export type Repair = { item: string; sameDay?: boolean };

export type Part = {
  id: string;
  name: string;
  symptom: string; // how a customer would describe it
  ask: string; // finishes "my laptop …" in the WhatsApp message
  repairs: Repair[];
};

// The parts of a laptop, in the order the drawing and the list show them.
export const parts: Part[] = [
  {
    id: "board",
    name: "Motherboard",
    symptom: "Won't turn on, no display, or a spill",
    ask: "won't turn on or has a motherboard fault",
    repairs: [
      { item: "Laptop won't turn on" },
      { item: "Turns on, but the screen stays black" },
      { item: "Water, tea or coffee spilled on it" },
      { item: "Not charging, or charging port loose" },
      { item: "Keeps restarting or shutting down" },
    ],
  },
  {
    id: "screen",
    name: "Screen",
    symptom: "Cracked, lines, flicker or dark patches",
    ask: "has a screen problem",
    repairs: [
      { item: "Cracked or broken screen replaced", sameDay: true },
      { item: "Lines, flicker or dark patches" },
    ],
  },
  {
    id: "keyboard",
    name: "Keyboard and touchpad",
    symptom: "Keys or touchpad not working",
    ask: "has a keyboard or touchpad problem",
    repairs: [
      { item: "Keyboard replacement", sameDay: true },
      { item: "Touchpad replacement" },
    ],
  },
  {
    id: "fan",
    name: "Fan",
    symptom: "Loud, hot, or shutting down when busy",
    ask: "is loud or overheating",
    repairs: [
      { item: "Fan replacement" },
      { item: "Overheating checked" },
    ],
  },
  {
    id: "memory",
    name: "Storage, RAM and OS",
    symptom: "Slow, full, or needs a fresh OS",
    ask: "is slow or needs an SSD, RAM or a fresh OS",
    repairs: [
      { item: "RAM upgrade or replacement", sameDay: true },
      { item: "Hard disk or SSD replacement", sameDay: true },
      { item: "Hard disk to SSD for a faster laptop", sameDay: true },
      { item: "OS installation", sameDay: true },
    ],
  },
  {
    id: "hinge",
    name: "Hinges and body",
    symptom: "Broken hinge or cracked panel",
    ask: "has a broken hinge or body panel",
    repairs: [
      { item: "Hinge repair" },
      { item: "Panel and base replacement" },
    ],
  },
  {
    id: "speaker",
    name: "Speakers",
    symptom: "No sound or crackling",
    ask: "has a sound problem",
    repairs: [{ item: "Speaker replacement" }],
  },
];

export const faqs: { q: string; a: string }[] = [
  { q: "Do you charge to check my laptop?", a: "No. Diagnosis and the quote are free, and you only pay for a repair you approve." },
  { q: "Which brands do you repair?", a: "Dell (Alienware too), HP, Lenovo, Asus, MSI and Apple MacBooks. Another brand? Send us the model on WhatsApp." },
  { q: "How long does a repair take?", a: "Common jobs such as screens, keyboards, RAM, SSDs and OS installs are usually done the same day. Motherboard work takes longer, and you get a time with the quote." },
  { q: "Do you come to my home or office?", a: "Yes, we offer doorstep service in Jaipur. Send your location and the problem on WhatsApp to book a visit." },
  { q: "Is there a warranty?", a: "Yes, repairs come with a warranty. We tell you what it covers, and for how long, along with the quote." },
  { q: "Can you fix a laptop that won't turn on?", a: "Often, yes. It is usually a motherboard or power fault, which is the work we specialise in. Bring it in for a free check." },
  { q: "I spilled something on my laptop. What now?", a: "Switch it off, unplug the charger, don't try to turn it on again, and bring it to us as soon as you can." },
  { q: "Should I back up my files first?", a: "If the laptop still turns on, yes. A fresh OS installation erases the drive, so tell us what needs saving." },
  { q: "Can you make my old laptop faster?", a: "Usually the biggest jump is a hard disk swapped for an SSD, plus more RAM. Tell us the model and we'll say what fits." },
  { q: "Who do I ask for?", a: "Ask for Ravi Sharma at shop G-9, Prestige Tower, near Amrapali Circle." },
];
