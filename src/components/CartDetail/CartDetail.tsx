import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { Emoji } from "../Emoji";
import { EmptyState } from "./EmptyState";
import { CartTotal } from "./CartTotal";
import styles from "./CartDetail.module.css";

export function CartDetail() {
  const { cart, total, remove } = useCart();

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
      <CartTotal total={total} subtotal={total} tax="0" />
    </section>
  );
}
