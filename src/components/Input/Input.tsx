import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";
import styles from "./Input.module.css";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: FieldError;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, ...props },
  ref
) {
  return (
    <div className={clsx(styles.container, className)}>
      <input
        ref={ref}
        {...props}
        className={clsx(styles.input, error && styles.inputOnError)}
      />
      {error ? <span className={styles.error}>{error.message}</span> : null}
    </div>
  );
});
