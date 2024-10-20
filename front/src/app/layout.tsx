import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Importa la fuente Poppins
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/context/cartContext";
import { UserProvider } from "@/context/user";

// Configura Poppins como la fuente principal
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "E-commerce StepUp",
  description: "Generated by Gimena Pascuale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <UserProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-grow bg-customBgPage">{children}</main>
            <Footer />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
