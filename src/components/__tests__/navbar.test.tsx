import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../navbar";

test("Navbar menampilkan nama brand", () => {
  render(<Navbar />);
  expect(screen.getByRole("link", { name: "Gina" })).toBeDefined();
});

test("Navbar menampilkan tombol menu burger", () => {
  render(<Navbar />);
  expect(
    screen.getByRole("button", { name: "Buka menu" }),
  ).toBeDefined();
});

test("Navbar menyembunyikan tautan sampai menu dibuka", () => {
  render(<Navbar />);
  expect(screen.queryByRole("link", { name: "Tentang" })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Buka menu" }));
  expect(screen.getByRole("link", { name: "Beranda" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Tentang" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Kontak" })).toBeDefined();
});
