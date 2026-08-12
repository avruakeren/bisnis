import { describe, expect, test, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("key warning", () => {
  const warn = vi.spyOn(console, "error");

  afterEach(() => warn.mockClear());

  test("tidak ada peringatan duplikat key", () => {
    render(<Home />);
    const keyMessages = warn.mock.calls
      .flat()
      .map(String)
      .filter((m) => /unique "key" prop|Each child in a list/.test(m));
    expect(keyMessages).toEqual([]);
  });
});