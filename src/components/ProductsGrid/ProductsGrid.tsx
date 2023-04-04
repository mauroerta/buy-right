import { getProducts } from "@/services/getProducts";
import { ProductTile } from "../ProductTile";
import { Skeleton } from "./Skeleton";
import styles from "./ProductsGrid.module.css";

export async function ProductsGrid() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductTile key={product.id} {...product} />
      ))}
    </div>
  );
}

ProductsGrid.Skeleton = Skeleton;
