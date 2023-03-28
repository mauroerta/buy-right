import { Product } from "@/types/Product";
import { query } from "./db";

export async function getProduct(slug: string): Promise<Product> {
  const results = await query<Product[]>(
    `SELECT * FROM products WHERE slug="${slug}" LIMIT 1`
  );

  return results[0];
}

export async function getProductById(id: number): Promise<Product> {
  const results = await query<Product[]>(
    `SELECT * FROM products WHERE id=${id} LIMIT 1`
  );

  return results[0];
}
