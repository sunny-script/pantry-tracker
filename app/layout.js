import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "PantryPro",
  description: "Track what you stock & enjoy what you save",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${nunito.variable}`}
        style={{
          backgroundColor: "#c8ba9f",
          color: "#1c1f0a",
          fontFamily: "var(--font-nunito)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
