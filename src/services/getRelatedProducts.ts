import { Product } from "@/types/Product";
import { getProducts } from "./getProducts";
import { getProductById } from "./getProduct";

export async function getRelatedProducts(
  relatedToId: number
): Promise<Product[]> {
  const products = await getProducts();
  const product = await getProductById(relatedToId);

  return products
    .filter((current) => {
      if (current.id === product.id) {
        return false;
      }
      return current.tags.some((tag) => product.tags.includes(tag));
    })
    .slice(0, 3);
}
