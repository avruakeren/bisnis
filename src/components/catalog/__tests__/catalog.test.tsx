import { describe, expect, test } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Catalog from "../catalog";
import { catalogItems } from "@/data/catalog";

describe("Katalog media ajar", () => {
  test("menampilkan semua item dalam bentuk grid kartu", () => {
    render(<Catalog items={catalogItems} />);
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(catalogItems.length);
  });

  test("setiap kartu menampilkan judul dan kelas", () => {
    render(<Catalog items={catalogItems} />);
    const first = catalogItems[0];
    const card = screen.getByText(first.title).closest("article");
    expect(card).not.toBeNull();
    expect(within(card as HTMLElement).getByText(`Kelas ${first.kelas}`)).toBeDefined();
  });

  test("memfilter katalog berdasarkan kelas", () => {
    render(<Catalog items={catalogItems} />);
    fireEvent.click(screen.getByRole("button", { name: "Kelas 3" }));
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(4);
    cards.forEach((card) => {
      expect(within(card).getByText("Kelas 3")).toBeDefined();
    });
    const otherTitle = catalogItems.find((item) => item.kelas !== 3)!.title;
    expect(screen.queryByText(otherTitle)).toBeNull();
  });

  test("filter kelas dapat dikembalikan ke Semua Kelas", () => {
    render(<Catalog items={catalogItems} />);
    fireEvent.click(screen.getByRole("button", { name: "Kelas 5" }));
    expect(screen.getAllByRole("article")).toHaveLength(4);
    fireEvent.click(screen.getByRole("button", { name: "Semua Kelas" }));
    expect(screen.getAllByRole("article")).toHaveLength(catalogItems.length);
  });

  test("memfilter katalog berdasarkan jenis RPP", () => {
    render(<Catalog items={catalogItems} />);
    fireEvent.click(screen.getByRole("button", { name: "RPP" }));
    const rppCount = catalogItems.filter((item) => item.jenis === "rpp").length;
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(rppCount);
    cards.forEach((card) => {
      expect(within(card).getByText("RPP")).toBeDefined();
    });
  });

  test("kombinasi filter kelas dan jenis bekerja", () => {
    render(<Catalog items={catalogItems} />);
    fireEvent.click(screen.getByRole("button", { name: "Kelas 4" }));
    fireEvent.click(screen.getByRole("button", { name: "RPP" }));
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(1);
    expect(screen.getByText("RPP IPA Kelas 4: Daur Hidup Makhluk Hidup")).toBeDefined();
  });

  test("tombol aksi Lihat Detail membuka modal detail", () => {
    render(<Catalog items={catalogItems} />);
    const first = catalogItems[0];
    const card = screen.getByText(first.title).closest("article");
    fireEvent.click(
      within(card as HTMLElement).getByRole("button", { name: "Lihat Detail" }),
    );
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText(first.deskripsi)).toBeDefined();
    expect(within(dialog).getByText(`Kelas ${first.kelas}`)).toBeDefined();
  });

  test("tombol aksi Pesan menampilkan notifikasi pesanan", () => {
    render(<Catalog items={catalogItems} />);
    const first = catalogItems[0];
    const card = screen.getByText(first.title).closest("article");
    fireEvent.click(
      within(card as HTMLElement).getByRole("button", { name: "Pesan" }),
    );
    const status = screen.getByRole("status");
    expect(
      within(status).getByText(
        `Pesanan untuk "${first.title}" telah diterima.`,
      ),
    ).toBeDefined();
  });

  test("menampilkan pesan saat tidak ada item yang cocok", () => {
    render(<Catalog items={[]} />);
    expect(screen.getByText(/Tidak ada item/)).toBeDefined();
  });
});
