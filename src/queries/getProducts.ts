import { Product } from "@/types/Product";
import { query } from "./db";

export function getProducts(): Promise<Product[]> {
  return query<Product[]>("SELECT * FROM products");
}
