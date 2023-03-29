import { Product } from "@/types/Product";
import { query } from "./db";

export async function getProductBy<Field extends keyof Product>(
  field: Field,
  value: Product[Field]
): Promise<Product> {
  const results = await query<Product[]>(
    `SELECT * FROM products WHERE ${field}="${value}" LIMIT 1`
  );

  return results[0];
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return getProductBy("slug", slug);
}

export async function getProductById(id: number): Promise<Product> {
  return getProductBy("id", id);
}
