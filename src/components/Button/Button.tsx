import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(styles.button, props.className)}
    />
  );
}
