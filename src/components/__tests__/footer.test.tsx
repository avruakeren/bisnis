import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../footer";

test("Footer menampilkan nama brand", () => {
  render(<Footer />);
  expect(screen.getAllByText(/studia\.co/).length).toBeGreaterThan(0);
});

test("Footer menampilkan deskripsi layanan", () => {
  render(<Footer />);
  expect(screen.getByText(/Membantu kebutuhan digital/)).toBeDefined();
});
