import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Emoji } from "../Emoji";
import { BankLogo } from "./BankLogo";
import { useCart } from "@/hooks/useCart";
import styles from "./CheckoutForm.module.css";
import { Input } from "../Input";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckoutDetail>({
    defaultValues: {
      cvv: "",
      name: "",
      number: "",
    },
    resolver: yupResolver(schema),
  });

  const { total } = useCart();

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
      <form className={styles.form} onSubmit={handleSubmit(console.log)}>
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
            type="text"
            {...register("cvv", { required: true })}
            placeholder="CVV"
            error={errors.cvv}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.payButton}>
          Pay {total} $
        </button>
      </form>
    </section>
  );
}