import Image from "next/image";
import { Col } from "react-bootstrap";
import styles from "../styles/components/HowItWorks.module.css";

export default function HowItWorks({ image, title, text, index }) {
  return (
    <Col className={styles.hiwCards}>
      <div className={styles.index}>{index}</div>
      <div className={styles.hiwCardsContent}>
        <div>
          <Image src={image} />
        </div>
        <div className={styles.hiwCardsText}>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
}
