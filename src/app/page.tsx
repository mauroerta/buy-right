import { ProductsGrid } from "@/components/ProductsGrid";

export default function Home() {
  return (
    <section>
      {/* @ts-expect-error Async Server Component */}
      <ProductsGrid />
    </section>
  );
}
