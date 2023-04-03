import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

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

export function ButtonLink(
  props: PropsWithChildren<LinkProps & { className?: string }>
) {
  return (
    <Link
      {...props}
      className={clsx(styles.button, styles.link, props.className)}
    />
  );
}
