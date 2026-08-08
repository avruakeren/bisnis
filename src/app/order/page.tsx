import type { Metadata } from "next";
import OrderForm from "@/components/order-form";

export const metadata: Metadata = {
  title: "Pesan",
  description: "Pesan materi ajar atau RPP kustom melalui WhatsApp.",
};

export default function OrderPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 py-12">
      <div className="mb-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Formulir Pesanan Kustom
        </h1>
        <p className="mt-2 text-zinc-600">
          Lengkapi formulir di bawah ini. Ringkasan pesanan akan dikirim
          melalui WhatsApp.
        </p>
      </div>
      <OrderForm />
    </div>
  );
}
