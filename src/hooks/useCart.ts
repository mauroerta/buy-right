import { Product } from "@/types/Product";
import { useLocalStorage } from "./useLocalStorage";
import { CartProduct } from "@/types/Cart";

export function useCart() {
  const [cart, setCart] = useLocalStorage<CartProduct[]>("right-cart", {
    defaultValue: [],
  });

  function add(product: Product) {
    setCart((prev) => [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }

  function remove(productId: number) {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  }

  function clear() {
    setCart([]);
  }

  const total = Number(cart.reduce((acc, curr) => acc + curr.price, 0)).toFixed(
    2
  );

  return { cart, total, add, remove, clear };
}
