import { getRelatedProducts } from "@/queries/getRelatedProducts";
import { ProductTile } from "../ProductTile";
import styles from "./RelatedProducts.module.css";

type RelatedProductsProps = {
  id: number;
};

export async function RelatedProducts({ id }: RelatedProductsProps) {
  const products = await getRelatedProducts(id);

  return (
    <div className={styles.container}>
      {products.slice(0, 3).map((product) => (
        <ProductTile key={product.id} {...product} />
      ))}
    </div>
  );
}
