import { CartDetail } from "@/components/CartDetail";
import { Section } from "@/components/Section";

export default function Cart() {
  return (
    <Section icon="🛒" title="Cart">
      <CartDetail />
    </Section>
  );
}
