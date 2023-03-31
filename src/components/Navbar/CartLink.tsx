"use client";

import Link from "next/link";
import { Emoji } from "../Emoji";
import { useCart } from "@/hooks/useCart";
import styles from "./Navbar.module.css";

export function CartLink() {
  const { cart } = useCart();
  const hasProducts = cart.length > 0;

  return (
    <Link href="/cart" className={styles.link}>
      {hasProducts ? (
        <span
          role="status"
          aria-label="number of items in the cart"
          className={styles.dot}
        >
          {cart.length}
        </span>
      ) : null}
      <Emoji label="cart">🛒</Emoji>
    </Link>
  );
}
