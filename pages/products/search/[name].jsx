import ProductCard from "../../../components/productCard";
import { Container, Row } from "react-bootstrap";
import Head from "next/head";
import Navbar from "../../../components/NavigationBar";
import useForm from "../../../hooks/useForm";
import styles from "../../../styles/pages/ProductCatalog.module.css";
import { useRouter } from "next/dist/client/router";
import CategoryCard from "../../../components/categoryCard";

export default function ProductCatalog({ products, query }) {
  const router = useRouter();
  const [search, handleSearch] = useForm("");
  const categories = [
    <CategoryCard name={"Body Care"} id={"1"} />,
    <CategoryCard name={"Drinks"} id={"2"} />,
    <CategoryCard name={"Eco-Containers"} id={"3"} />,
    <CategoryCard name={"Food Ingredients"} id={"4"} />,
    <CategoryCard name={"Fresh Food"} id={"5"} />,
    <CategoryCard name={"Household"} id={"6"} />,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/products/search/${search}`);
  };
  const productReccomendations = products.map((p, i) => (
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
  return (
    <div>
      <Head>
        <title>BeliGrosir | Search for {query}</title>
        <meta
          name="description"
          content="Shop for bulk items at BeliGrosir to save your money and our world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <main className={styles.main}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Find bulk needs here..."
              value={search}
              onChange={handleSearch}
            />
          </form>
          <div className={styles.categories}><p>Categories:</p>{categories}</div>

          <Row className={styles.products}>{productReccomendations}</Row>
        </main>
      </Container>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const name = params.name;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LINK}search?product_name=${name}`
  );
  let data = "";
  if (res) data = await res.json();

  return {
    props: {
      products: data.data || "",
      query: params.name || "",
    },
  };
}
