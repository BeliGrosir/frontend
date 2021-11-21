import { Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/ProductCard.module.css";
export default function ProductCard({
  id,
  image,
  title,
  retail,
  price,
  location,
}) {
  return (
    <Link href={`/product/${id}`}>
      <Col className={styles.main} xs={3}>
        <div className={styles.image}>
          <Image src={image} layout="fill" />
        </div>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.retail}>
            Retail: <span>Rp{retail}/kg</span>
          </p>
          <p className={styles.price}>Rp{price}/kg</p>
          <button className={styles.button}>Add to Cart</button>
        </div>
        <div className={styles.location}>
          <p>{location}</p>
        </div>
      </Col>
    </Link>
  );
}
