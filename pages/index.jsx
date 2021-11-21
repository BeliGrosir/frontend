import Head from "next/head";
import Image from "next/image";
import Hero from "../public/landing/hero.png";
import Navbar from "../components/NavigationBar";
import Category from "../components/category";
import HowItWorks from "../components/howItWorksCard";
import styles from "../styles/pages/Home.module.css";
import useForm from "../hooks/useForm";
import { useRouter } from "next/dist/client/router";
import { Row, Col } from "react-bootstrap";
import {
  BodyCare,
  Drinks,
  EcoContainer,
  FoodIngredients,
  FreshFood,
  Household,
} from "../utils/categories";
import { Containers, Delivery, Order, Package } from "../utils/howItWorks";

export default function Home() {
  const [search, handleSearch] = useForm("");
  const router = useRouter();

  const categories = [
    <Category image={BodyCare} title={"Body Care"} />,
    <Category image={Drinks} title={"Drinks"} />,
    <Category image={EcoContainer} title={"Eco-Containers"} />,
    <Category image={FoodIngredients} title={"Food Ingredients"} />,
    <Category image={FreshFood} title={"Fresh Food"} />,
    <Category image={Household} title={"Household"} />,
  ];

  const howItWorks = [
    <HowItWorks
      index={1}
      image={Order}
      title={"Make an order"}
      text={
        "Fulfill your business supply needs from various categories. Buy in bulk and get lower prices."
      }
    />,
    <HowItWorks
      index={2}
      image={Containers}
      title={"Prepare empty containers"}
      text={
        "Ordering from us means zero-waste. Fret not, we also offer a selection of eco-containers."
      }
    />,
    <HowItWorks
      index={3}
      image={Delivery}
      title={"Wait for delivery"}
      text={
        "Our courier will take your order from the merchants straight to your destination."
      }
    />,
    <HowItWorks
      index={4}
      image={Package}
      title={"Receive package-free order"}
      text={"Fill containers with received products, and you’re done."}
    />,
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/products/search/${search}`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>BeliGrosir | Buy Bulk Items and Save the Environment</title>
        <meta
          name="description"
          content="Shop for bulk items at BeliGrosir to save your money and our world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.landing}>
          <Row>
            <Col className={styles.landingText}>
              <h1>Buy in Bulk & Save the Environment</h1>
              <p className={styles.landingPromo}>
                Lower prices, free of single use packaging, and zero-waste!
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Find bulk needs here..."
                  value={search}
                  onChange={handleSearch}
                />
              </form>
              <p className={styles.landingInfo}>
                Make sure you have an empty container available. Don't have a
                container yet? <a>Find here</a>
              </p>
            </Col>
            <Col>
              <div className={styles.landingImg}>
                <Image src={Hero} layout="fill" />
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.categories}>
          <h3>Categories</h3>
          <Row className={styles.categoryNames}>{categories}</Row>
        </div>
        <div className={styles.howItWorks}>
          <h3>How It Works</h3>
          <Row className={styles.howItWorksCards}>{howItWorks}</Row>
        </div>
      </main>
    </div>
  );
}
