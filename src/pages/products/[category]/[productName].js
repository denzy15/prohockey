import { ProductInfo } from "@/modules/products";
import { SERVER_URL } from "@/shared/constants";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const ProductInfoPage = ({ product }) => {
  const router = useRouter();
  const { category, productName: prodQueryName } = router.query;

  const productName = decodeURIComponent(prodQueryName.split("?")[0]).replace(
    /%20/g,
    " "
  );

  return (
    <>
      <Head>
        <title>{productName} - ProHockey</title>
        <meta name="description" content={`Описание продукта ${productName}`} />
        <meta
          name="keywords"
          content={`${productName}, ${category}, ключевые слова`}
        />
        <meta property="og:title" content={`${productName} - ProHockey`} />
        <meta
          property="og:description"
          content={`Описание продукта ${productName}`}
        />
        <meta
          property="og:url"
          content={`https://prohockey.kz/products/${category}/${productName}`}
        />
      </Head>
      <ProductInfo product={product}></ProductInfo>;
    </>
  );
};

export async function getStaticPaths() {
  try {
    const { data: products } = await axios.get(`${SERVER_URL}/products`);

    const paths = products.map((product) => ({
      params: { category: product.category.urlPath, productName: product.name },
    }));

    console.log(paths);
    

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  const { productName } = params;

  try {
    const { data: product } = await axios.get(
      `${SERVER_URL}/products?name=${productName}`
    );

    return {
      props: { product },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: { product: {} },
    };
  }
}

export default ProductInfoPage;
