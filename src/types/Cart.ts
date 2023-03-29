import { Product } from "./Product";

export type Cart = {
  id: string;
  user_id: string;
};

export type CartProduct = Product & {
  quantity: number;
};
