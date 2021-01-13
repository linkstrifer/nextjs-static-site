import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>The About page is loaded from a JSON file, it supports i18n.</p>
      <Link href="/en_US/about">
        <button>Go to about</button>
      </Link>
    </div>
  );
}
