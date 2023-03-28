type CartProduct = {
  productId: number;
  quantity: number;
};

export type Cart = {
  products: CartProduct[];
  tax: number;
  total: number;
};
