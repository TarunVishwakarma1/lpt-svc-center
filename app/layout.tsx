import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { shop } from "./content";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Laptop repair in Vaishali Nagar, Jaipur | ILS IT Laptop Solution",
  description:
    "Laptop Service Center at G-9, Prestige Tower, near Amrapali Circle. Motherboard repair, screens, keyboards, fans, SSD and RAM for Dell, HP, Lenovo, Asus, MSI and MacBook. Free diagnosis and doorstep service in Jaipur.",
};

export const viewport: Viewport = {
  themeColor: "#173f31",
};

// Search engines read this; every value is a confirmed fact from content.ts.
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ComputerRepair",
  name: `${shop.brand} (${shop.name})`,
  telephone: "+91 95301 08015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-9, Prestige Tower, Near Amrapali Circle, Vaishali Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${barlow.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
