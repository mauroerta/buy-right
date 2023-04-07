import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";

export const metadata = {
  title: "Buy-Right",
  description: "Fake e-commerce made for educative",
};

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={clsx(styles.main, inter.className)}>
          <header>
            <Navbar />
          </header>
          <main className={styles.body}>{children}</main>
        </div>
      </body>
    </html>
  );
}
