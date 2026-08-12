"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatHarga } from "@/components/catalog/format";
import { ArrowRight, Minus, Plus, Trash, ShoppingCart } from "@phosphor-icons/react";

export default function CartPage() {
  const { items, updateQty, removeItem, totalHarga, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-24">
        <ShoppingCart size={48} className="text-zinc-300" />
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Keranjang kosong</h1>
        <p className="mt-2 text-zinc-500">Belum ada produk yang ditambahkan.</p>
        <Link
          href="/catalog"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Lihat katalog
          <ArrowRight size={14} weight="bold" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <h1 className="text-2xl font-bold tracking-tight">Keranjang</h1>
      <p className="mt-1 text-zinc-500">
        {totalItems} item · Total {formatHarga(totalHarga)}
      </p>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl bg-white/55 p-4 ring-1 ring-white/60 backdrop-blur-xl"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-zinc-900 truncate">{item.title}</h3>
              <p className="mt-0.5 text-sm text-zinc-500">
                {formatHarga(item.harga)} / item
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/60 ring-1 ring-white/70 transition-colors hover:bg-white/90"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm font-medium tabular-nums">
                {item.qty}
              </span>
              <button
                type="button"
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/60 ring-1 ring-white/70 transition-colors hover:bg-white/90"
              >
                <Plus size={14} />
              </button>
            </div>
            <p className="w-24 text-right text-sm font-semibold text-zinc-900 tabular-nums">
              {formatHarga(item.harga * item.qty)}
            </p>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-500"
            >
              <Trash size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white/55 p-5 ring-1 ring-white/60 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">Total</span>
          <span className="text-lg font-bold text-zinc-900 tabular-nums">
            {formatHarga(totalHarga)}
          </span>
        </div>
      </div>

      <Link
        href="/order"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
      >
        Lanjut ke Checkout
        <ArrowRight size={14} weight="bold" />
      </Link>
    </div>
  );
}