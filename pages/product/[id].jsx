import Head from "next/head";

export default function ProductDetail() {
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
      <main>
        <div>
          <div></div>
          <div>
            <div>
              <h3>Almonds</h3>
              <p>Food Ingredients</p>
            </div>
            <div>
              <p>
                Retail: <span>Rp.75.000/kg</span>
              </p>
              <h3>Rp.65.000/kg</h3>
            </div>
            <button>Add to Cart</button>
            <div></div>
            <p>Naked Inc.</p>
          </div>
        </div>
        <div>
            <h4>Similar Products</h4>
            <div>
                
            </div>
        </div>
      </main>
    </div>
  );
}
