import Link from "next/link";
import styles from "./CartDetail.module.css";

type CartTotalProps = {
  total: string;
  tax: string;
  subtotal: string;
};

export function CartTotal({ total, subtotal, tax }: CartTotalProps) {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.priceItem}>
          <span className={styles.label}>Subtotal</span>
          <span>{subtotal} $</span>
        </div>
        <div className={styles.priceItem}>
          <span className={styles.label}>Tax</span>
          <span>{tax} $</span>
        </div>
        <hr className={styles.divider} />
        <div className={styles.priceItem}>
          <span className={styles.label}>Total</span>
          <span>{total} $</span>
        </div>
      </div>

      <div className={styles.checkout}>
        <Link href="/checkout" className={styles.checkout}>
          Checkout
        </Link>
      </div>
    </div>
  );
}
