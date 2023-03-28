import { Product } from "@/types/Product";
import { query } from "./db";

export async function getRelatedProducts(
  relatedToId: number
): Promise<Product[]> {
  return query<Product[]>(
    `SELECT * FROM products WHERE id != ${relatedToId} LIMIT 3`
  );
}
