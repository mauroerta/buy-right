import clsx from "clsx";
import styles from "./ProductPrice.module.css";

type ProductPriceProps = {
  price: number;
  className?: string;
};

export function ProductPrice({ price, className }: ProductPriceProps) {
  return (
    <section className={clsx(styles.container, className)}>
      <span className={styles.title}>The Right Price</span>
      <span className={styles.price}>{price} $</span>
      <button type="button" className={styles.buyButton}>
        Buy
      </button>
    </section>
  );
}
