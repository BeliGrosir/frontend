import Image from "next/image";
import { Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/components/Category.module.css";

export default function Category({ image, title, id }) {
  return (
    <Link href={`/products/category/${id}`}>
      <Col className={styles.category}>
        <div className={styles.categoryImage}>
          <Image src={image} />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </Col>
    </Link>
  );
}
