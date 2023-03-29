import { Product } from "@/types/Product";
import styles from "./BuyButton.module.css";
import { useCart } from "@/hooks/useCart";

type BuyButtonProps = {
  product: Product;
};

export function BuyButton({ product }: BuyButtonProps) {
  const { cart, add } = useCart();

  const isInCart = cart.some((p) => p.id === product.id);

  return (
    <button
      type="button"
      className={styles.buyButton}
      onClick={isInCart ? undefined : () => add(product)}
    >
      {isInCart ? "In the cart" : "Buy"}
    </button>
  );
}
