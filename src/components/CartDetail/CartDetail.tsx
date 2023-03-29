import { useCart } from "@/hooks/useCart";
import { Emoji } from "../Emoji";
import { EmptyState } from "./EmptyState";
import styles from "./CartDetail.module.css";
import Link from "next/link";

export function CartDetail() {
  const { cart, remove } = useCart();

  const isEmpty = cart.length === 0;

  if (isEmpty) {
    return <EmptyState />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span>Title</span>
        <span>Quantity</span>
        <span>Price</span>
      </div>
      <div className={styles.list}>
        {cart.map((product) => (
          <div key={product.id} className={styles.item}>
            <span>
              <Link href={`/products/${product.slug}`}>
                {`${product.icon} ${product.title}`}
              </Link>
            </span>
            <span>{product.quantity}</span>
            <span>{product.price} $</span>
            <button
              role="button"
              className={styles.remove}
              onClick={() => remove(product.id)}
            >
              <Emoji label={`remove ${product.title}`}>❌</Emoji>
            </button>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div>
          <div className={styles.priceItem}>
            <span className={styles.label}>Subtotal</span>
            <span>{cart.reduce((acc, curr) => acc + curr.price, 0)}</span>
          </div>
          <div className={styles.priceItem}>
            <span className={styles.label}>Tax</span>
            <span>0$</span>
          </div>
          <hr className={styles.divider} />
          <div className={styles.priceItem}>
            <span className={styles.label}>Total</span>
            <span>{cart.reduce((acc, curr) => acc + curr.price, 0)}</span>
          </div>
        </div>

        <div className={styles.checkout}>
          <Link href="/checkout">Checkout</Link>
        </div>
      </div>
    </section>
  );
}
