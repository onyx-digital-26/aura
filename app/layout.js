import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Preloader from "@/components/layout/Preloader";
// Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // Import Footer
import CartSidebar from "@/components/layout/CartSidebar";
import GlassCursor from "@/components/visuals/GlassCursor";
import VaporTrail from "@/components/visuals/VaporTrail";
import { ShopProvider } from "@/context/ShopContext";
import SmoothScroll from "@/components/layout/SmoothScroll";
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-montserrat",
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
      <body className="bg-background text-foreground selection:bg-accent selection:text-black cursor-none">
        <Preloader />
        <ShopProvider>
          <SmoothScroll />
          {/* Atmosphere */}
          <GlassCursor />
          <VaporTrail />

          {/* Layout */}
          <Header />
          <CartSidebar />

          <main className="min-h-screen relative z-10 pt-20">{children}</main>

          {/* Footer added at the bottom of the body, outside main */}
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
