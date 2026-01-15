import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

// --- FONT CONFIGURATION ---
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant", // Matches CSS variable
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-montserrat", // Matches CSS variable
  display: "swap",
});

export const metadata = {
  title: "AURA | Ethereal Fragrance",
  description: "A sensory journey into the essence of scent.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground selection:bg-accent selection:text-black">
        {/* We will add the Cursor and Header here in later steps */}
        <main className="min-h-screen relative z-10">{children}</main>
      </body>
    </html>
  );
}
