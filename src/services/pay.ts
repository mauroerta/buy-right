import { CartProduct } from "@/types/Cart";

export function pay(products: CartProduct[]) {
  return fetch("/api/pay", {
    method: "POST",
    body: JSON.stringify(products),
  });
}
