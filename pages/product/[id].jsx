import Head from "next/head";
import Navbar from "../../components/NavigationBar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import categoryMap from "../../utils/categoryMap.json";
import ProductCard from "../../components/productCard";
import styles from "../../styles/pages/Product.module.css";

export default function ProductDetail({ product, simProduct }) {
  simProduct = simProduct.filter( p => p.product_id !== product.product_id)
  const productReccomendations = simProduct.map((p, i) => (
    <ProductCard
      key={i}
      id={p.product_id}
      image={`${process.env.NEXT_PUBLIC_API_LINK}static/${p.product_image}`}
      title={p.product_name}
      retail={p.retail_price}
      price={p.product_price}
      location={"Jakarta Selatan"}
    />
  ));
  const handleAddToCart = () => {
    fetch()
  }
  return (
    <div>
      <Head>
        <title>BeliGrosir | {product.product_name}</title>
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
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_LINK}static/${product.product_image}`}
                  layout="fill"
                />
              </div>
            </Col>
            <Col xs={8}>
              <div className={styles.title}>
                <h3>{product.product_name}</h3>
                <p>{categoryMap[product.category_id]}</p>
              </div>
              <div className={styles.price}>
                <p>
                  Retail: <span>Rp.{product.retail_price}/kg</span>
                </p>
                <h3>Rp.{product.product_price}/kg</h3>
              </div>
              <button className={styles.addToCart}>Add to Cart</button>
              <div className={styles.brand}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_LINK}static/${product.store.store_image}`}
                  height={50}
                  width={50}
                />
                <p>{product.store.store_name}</p>
              </div>
            </Col>
          </Row>
          <div className={styles.simProducts}>
            <h4>Similar Products</h4>
            <Row>{productReccomendations}</Row>
          </div>
        </Container>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LINK}product?product_id=${id}`
  );
  let product = "";
  if (res) product = await res.json();
  product = product.data || "";
 
  res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LINK}products?category_id=${product.category_id}`
  )
  let simProduct = ""
  if (res) simProduct = await res.json();

  return {
    props: {
      product: product || "",
      simProduct: simProduct.data
    },
  };
}
