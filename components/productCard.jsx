import { Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/ProductCard.module.css";
import useUser from "..//hooks/useUser";
import { useRouter } from "next/dist/client/router";

export default function ProductCard({
  id,
  image,
  title,
  retail,
  price,
  location,
}) {
  const user = useUser();
  const router = useRouter()
  const handleAddToCart = async (e) => {
    e.preventDefault();
    const data = {
      product_id: id,
      quantity: 1
    };
    var token = JSON.parse(user).token
    const error = false;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}cart`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw new Error("Error");
        }
      })
      .catch((e) => {
        error = true;
        console.log(e);
      });
      if (!error) {
        router.reload(window.location.pathname)
      }
  };
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
          <button className={styles.button} onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className={styles.location}>
          <p>{location}</p>
        </div>
      </Col>
    </Link>
  );
}
