import clsx from "clsx";
import styles from "./Emoji.module.css";

type EmojiProps = {
  label: string;
  children: string;
  size?: "small" | "medium" | "large" | "default";
  className?: string;
};

export function Emoji({
  children,
  label,
  size = "default",
  className,
}: EmojiProps) {
  return (
    <span
      role="img"
      title={label}
      aria-label={label}
      className={clsx(styles[size], className)}
    >
      {children}
    </span>
  );
}
