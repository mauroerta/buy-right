import { Product } from "@/types/Product";
import { getProducts } from "./getProducts";

export async function getProductBy<Field extends keyof Product>(
  field: Field,
  value: Product[Field]
): Promise<Product> {
  const products = await getProducts();
  const found = products.find((product) => product[field] === value);
  if (!found) {
    throw new Error(`No product found with ${field} equal to ${value}`);
  }

  return found;
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return getProductBy("slug", slug);
}

export async function getProductById(id: number): Promise<Product> {
  return getProductBy("id", id);
}
