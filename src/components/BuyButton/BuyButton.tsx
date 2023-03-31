import { Product } from "@/types/Product";
import { useCart } from "@/hooks/useCart";
import { Button } from "../Button";
import styles from "./BuyButton.module.css";

type BuyButtonProps = {
  product: Product;
};

export function BuyButton({ product }: BuyButtonProps) {
  const { cart, add } = useCart();

  const isInCart = cart.some((p) => p.id === product.id);

  return (
    <Button
      className={styles.buyButton}
      onClick={isInCart ? undefined : () => add(product)}
    >
      {isInCart ? "In the cart" : "Buy"}
    </Button>
  );
}
