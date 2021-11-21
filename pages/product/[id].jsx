import Head from "next/head";
import Navbar from "../../components/NavigationBar";
import Almond from "../../public/deleteLater/almond.png";
import Brand from "../../public/deleteLater/brand.png";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/productCard";
import styles from "../../styles/pages/Product.module.css";

export default function ProductDetail() {
const productReccomendations = [
    <ProductCard image={Almond} title={"Almonds"} retail={"75.000"} price={"65.000"} location={"Jakarta Selatan"} />,
    <ProductCard image={Almond} title={"Almonds"} retail={"75.000"} price={"65.000"} location={"Jakarta Selatan"} />,
    <ProductCard image={Almond} title={"Almonds"} retail={"75.000"} price={"65.000"} location={"Jakarta Selatan"} />,
    <ProductCard image={Almond} title={"Almonds"} retail={"75.000"} price={"65.000"} location={"Jakarta Selatan"} />,
    <ProductCard image={Almond} title={"Almonds"} retail={"75.000"} price={"65.000"} location={"Jakarta Selatan"} />,
    <ProductCard image={Almond} title={"Almonds"} retail={"75.000"} price={"65.000"} location={"Jakarta Selatan"} />,
    <ProductCard image={Almond} title={"Almonds"} retail={"75.000"} price={"65.000"} location={"Jakarta Selatan"} />,
]
  return (
    <div>
      <Head>
        <title>BeliGrosir | Wholsale Almonds</title>
        <meta
          name="description"
          content="Shop for bulk items at BeliGrosir to save your money and our world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Container>
          <Row>
            <Col xs={4}>
              <div className={styles.image}>
                <Image src={Almond} layout="fill" />
              </div>
            </Col>
            <Col xs={8}>
              <div className={styles.title}>
                <h3>Almonds</h3>
                <p>Food Ingredients</p>
              </div>
              <div className={styles.price}>
                <p>
                  Retail: <span>Rp.75.000/kg</span>
                </p>
                <h3>Rp.65.000/kg</h3>
              </div>
              <button className={styles.addToCart}>Add to Cart</button>
              <div className={styles.brand}>
                <Image src={Brand} />
                <p>Naked Inc.</p>
              </div>
            </Col>
          </Row>
          <div className={styles.simProducts}>
            <h4>Similar Products</h4>
            <Row>
                {productReccomendations}
            </Row>
          </div>
        </Container>
      </main>
    </div>
  );
}
