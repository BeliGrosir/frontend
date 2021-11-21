import Link from "next/link";
import styles from "../styles/components/CategoryCard.module.css"
export default function CategoryCard({ name, id }) {
  return (
    <div className={styles.main}>
      <Link href={`/products/category/${id}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
}
