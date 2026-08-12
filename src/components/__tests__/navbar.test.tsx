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
  expect(screen.getByRole("link", { name: "Gina" })).toBeDefined();
});

test("Navbar menampilkan tombol menu burger", () => {
  renderNavbar();
  expect(
    screen.getByRole("button", { name: "Buka menu" }),
  ).toBeDefined();
});

test("Navbar menyembunyikan tautan sampai menu dibuka", () => {
  renderNavbar();
  expect(screen.queryByRole("link", { name: "Tentang" })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Buka menu" }));
  expect(screen.getByRole("link", { name: "Beranda" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Tentang" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Kontak" })).toBeDefined();
});