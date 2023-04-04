import { Product } from "@/types/Product";
import { sleep } from "@/utils/sleep";

const products: Product[] = [
  {
    id: 1,
    slug: "the-right-shirt",
    icon: "👔",
    tags: ["male", "clothes"],
    title: "The right shirt",
    price: 29.99,
    description: "100% Cotton, Made in Italy 🍕",
  },
  {
    id: 2,
    slug: "the-right-dress",
    icon: "👗",
    tags: ["female", "clothes"],
    title: "The right dress",
    price: 59.99,
    description: "100% Cotton, Made in Japan 🇯🇵",
  },
  {
    id: 3,
    slug: "the-right-t-shirt",
    icon: "👕",
    tags: ["male", "clothes"],
    title: "The right t shirt",
    price: 19.99,
    description: "100% Cotton, Made in Spain 🇪🇸",
  },
  {
    id: 4,
    slug: "the-right-glasses",
    icon: "👓",
    tags: ["accessories"],
    title: "The right glasses",
    price: 99.99,
    description: "100% Acetate, Lens: 100% Polycarbonate.",
  },
  {
    id: 5,
    slug: "the-right-jeans",
    icon: "👖",
    tags: ["male", "clothes"],
    title: "The right jeans",
    price: 79.99,
    description: "100% Cotton, Made in USA 🇺🇸",
  },
  {
    id: 6,
    slug: "the-right-bag",
    icon: "👜",
    tags: ["accessories"],
    title: "The right bag",
    price: 79.99,
    description: "100% Cotton, Made in France 🇫🇷",
  },
];

export async function getProducts(): Promise<Product[]> {
  await sleep(100);
  return products;
}
