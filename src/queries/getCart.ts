import { Cart } from "@/types/Cart";
import { query } from "./db";

export async function getCart() {
  const results = await query<Cart[]>("SELECT * FROM cart");

  return results[0];
}
