import { ProductTile } from "../ProductTile";
import styles from "./ProductsGrid.module.css";

export function Skeleton() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 3 }).map((_, index) => (
        <ProductTile.Skeleton key={index} />
      ))}
    </div>
  );
}
