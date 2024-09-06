import { CategoryList } from "@/modules/products";
import { SERVER_URL } from "@/shared/constants";
import axios from "axios";
import Head from "next/head";

const ProductsPage = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Каталог хоккейных аксессуаров - ProHockey</title>
        <meta name="description" content="Описание категорий продуктов" />
        <meta
          name="keywords"
          content="ключевые слова для категорий продуктов"
        />
        <meta property="og:title" content="Категории продуктов - ProHockey" />
        <meta
          property="og:description"
          content="Описание категорий продуктов"
        />
        <meta property="og:url" content="https://prohockey.kz/products" />
      </Head>
      <CategoryList categories={categories} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await axios.get(`${SERVER_URL}/categories`);
    const categories = res.data;

    return {
      props: { categories },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { categories: [] },
    };
  }
}

export default ProductsPage;
