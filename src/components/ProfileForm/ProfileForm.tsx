import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../Input";
import styles from "./ProfileForm.module.css";
import { ProfileInfo } from "@/types/ProfileInfo";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "../Button";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
});

export function ProfileForm() {
  const { profile, setProfile } = useProfile();
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm<ProfileInfo>({
    defaultValues: profile,
    resolver: yupResolver(schema),
    values: profile,
  });

  function onSubmit(values: ProfileInfo) {
    setProfile(values);
  }

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputsBox}>
          <Input
            type="text"
            {...register("firstName", { required: true })}
            placeholder="The Right First Name"
            error={errors.firstName}
            className={styles.input}
          />
          <Input
            type="text"
            {...register("lastName", { required: true })}
            placeholder="The Right Last Name"
            error={errors.lastName}
            className={styles.input}
          />
        </div>

        <div className={styles.inputsBox}>
          <Input
            type="text"
            {...register("address", {
              required: true,
              maxLength: 16,
            })}
            placeholder="The right address"
            error={errors.address}
            className={styles.input}
          />
        </div>

        <Button type="submit" disabled={!isDirty}>
          Save Changes
        </Button>
      </form>
    </section>
  );
}
