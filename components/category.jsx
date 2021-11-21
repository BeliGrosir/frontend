import Image from "next/image";
import { Col } from "react-bootstrap";
import styles from "../styles/components/Category.module.css";

export default function Category({ image, title }) {
  return (
    <Col className={styles.category}>
      <div className={styles.categoryImage}>
        <Image src={image} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </Col>
  );
}
