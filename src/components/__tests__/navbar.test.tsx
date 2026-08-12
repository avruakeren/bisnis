import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "../navbar";

function renderNavbar() {
  return render(
    <CartProvider>
      <Navbar />
    </CartProvider>,
  );
}

test("Navbar menampilkan nama brand", () => {
  renderNavbar();
  expect(
    screen.getByRole("link", { name: /studia\.co/ }),
  ).toBeDefined();
});

test("Navbar menampilkan tombol menu burger", () => {
  renderNavbar();
  expect(screen.getByRole("button", { name: "Buka menu" })).toBeDefined();
});

test("Navbar menampilkan tautan navigasi", () => {
  renderNavbar();
  expect(screen.getByRole("link", { name: "Layanan" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Cara Kerja" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Katalog" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Kontak" })).toBeDefined();
});

test("Navbar membuka menu mobile saat burger diklik", () => {
  renderNavbar();
  fireEvent.click(screen.getByRole("button", { name: "Buka menu" }));
  expect(screen.getByRole("button", { name: "Tutup menu" })).toBeDefined();
});
