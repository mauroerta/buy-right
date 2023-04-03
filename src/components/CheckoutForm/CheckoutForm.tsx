import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCart } from "@/hooks/useCart";
import { pay } from "@/services/pay";
import { useProfile } from "@/hooks/useProfile";
import { Emoji } from "../Emoji";
import { Input } from "../Input";
import { Button } from "../Button";
import { BankLogo } from "./BankLogo";
import styles from "./CheckoutForm.module.css";

type CheckoutDetail = {
  cvv: string;
  name: string;
  number: string;
};

const schema = yup.object({
  cvv: yup.string().required().max(3),
  name: yup.string().required(),
  number: yup.string().required().max(16).min(16),
});

export function CheckoutForm() {
  const { total, cart, clear: clearCart } = useCart();
  const { profile } = useProfile();
  const router = useRouter();
  const [isPaying, setIsPaying] = useState(false);

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm<CheckoutDetail>({
    defaultValues: {
      cvv: "",
      name: `${profile.firstName} ${profile.lastName}`,
      number: "",
    },
    mode: "all",
    values: {
      cvv: "",
      name: profile.firstName ? `${profile.firstName} ${profile.lastName}` : "",
      number: "",
    },
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    setIsPaying(true);
    pay(cart)
      .then(() => {
        setIsPaying(false);
        clearCart();
        router.push("/thank-you");
      })
      .catch(() => {
        setIsPaying(false);
      });
  }

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div>
          <Emoji label="bank">🏦</Emoji> The Right Bank
        </div>
        <div className={styles.chip} />
        <div>xxxx xxxx xxxx xxxx</div>
        <BankLogo className={styles.logo} />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputsBox}>
          <Input
            type="number"
            {...register("number", { required: true, maxLength: 16 })}
            placeholder="Credit Card Number"
            error={errors.number}
            className={styles.input}
          />
        </div>
        <div className={styles.inputsBox}>
          <Input
            type="text"
            {...register("name", { required: true })}
            placeholder="The Right Name"
            error={errors.name}
            className={styles.input}
          />
          <Input
            type="number"
            {...register("cvv", { required: true })}
            placeholder="CVV"
            error={errors.cvv}
            className={styles.input}
          />
        </div>

        <Button type="submit" disabled={!isDirty || isPaying}>
          {isPaying ? "Paying..." : `Pay ${total} $`}
        </Button>
      </form>
    </section>
  );
}
