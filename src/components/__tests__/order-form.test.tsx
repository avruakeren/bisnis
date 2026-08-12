import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "@/lib/cart-context";
import CheckoutPage from "@/app/order/page";

const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

function renderCheckout() {
  return render(
    <CartProvider>
      <CheckoutPage />
    </CartProvider>,
  );
}

describe("Checkout", () => {
  test("menampilkan pesan keranjang kosong saat tidak ada item", () => {
    renderCheckout();
    expect(screen.getByText("Keranjang kosong")).toBeDefined();
    expect(screen.getByRole("link", { name: /Lihat katalog/ })).toBeDefined();
  });

  test("menampilkan ringkasan pesanan berisi item dari keranjang", () => {
    localStorage.setItem(
      "gina-cart",
      JSON.stringify([
        { id: "test-1", title: "Media Ajar IPA Kelas 6", harga: 40000, qty: 2 },
      ]),
    );
    renderCheckout();
    expect(screen.getByText("Media Ajar IPA Kelas 6")).toBeDefined();
    expect(screen.getByText(/2.*40\.000/)).toBeDefined();
    localStorage.removeItem("gina-cart");
  });

  test("menampilkan form data diri di step 1", () => {
    localStorage.setItem(
      "gina-cart",
      JSON.stringify([
        { id: "test-1", title: "Media Ajar", harga: 40000, qty: 1 },
      ]),
    );
    renderCheckout();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeDefined();
    expect(screen.getByLabelText(/Nama Sekolah/)).toBeDefined();
    expect(screen.getByLabelText(/Nomor WhatsApp/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Lanjut ke Pembayaran/ })).toBeDefined();
    localStorage.removeItem("gina-cart");
  });

  test("tombol lanjut nonaktif saat form belum lengkap", () => {
    localStorage.setItem(
      "gina-cart",
      JSON.stringify([
        { id: "test-1", title: "Media Ajar", harga: 40000, qty: 1 },
      ]),
    );
    renderCheckout();
    const btn = screen.getByRole("button", { name: /Lanjut ke Pembayaran/ });
    expect((btn as HTMLButtonElement).disabled).toBe(true);
    localStorage.removeItem("gina-cart");
  });
});