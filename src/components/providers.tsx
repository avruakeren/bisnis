"use client";

import { CartProvider } from "@/lib/cart-context";
import SmoothScroll from "./smooth-scroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </CartProvider>
  );
}