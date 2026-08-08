import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../footer";

test("Footer menampilkan nama brand", () => {
  render(<Footer />);
  expect(screen.getByText(/Gina/)).toBeDefined();
});

test("Footer menampilkan tagline produk", () => {
  render(<Footer />);
  expect(screen.getByText(/Materi pembelajaran untuk sekolah SD/)).toBeDefined();
});
