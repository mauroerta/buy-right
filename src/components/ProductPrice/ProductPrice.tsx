import clsx from "clsx";
import styles from "./ProductPrice.module.css";
import { BuyButton } from "../BuyButton";
import { Product } from "@/types/Product";

type ProductPriceProps = {
  product: Product;
  className?: string;
};

export function ProductPrice({ product, className }: ProductPriceProps) {
  return (
    <section className={clsx(styles.container, className)}>
      <span className={styles.title}>The Right Price</span>
      <span className={styles.price}>{product.price} $</span>
      <BuyButton product={product} />
    </section>
  );
}
