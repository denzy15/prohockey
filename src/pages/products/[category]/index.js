import { ProductsCategory } from "@/modules/products";
import { SERVER_URL } from "@/shared/constants";
import { reverseTransliterate } from "@/shared/utils";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

const ProductsByCategoryPage = ({ initialProducts }) => {
  const router = useRouter();
  const { category } = router.query;

  const transliteratedCategoryName = reverseTransliterate(category);
  return (
    <>
      <Head>
        <title>{transliteratedCategoryName} - ProHockey</title>
        <meta
          name="description"
          content={`Товары категории ${transliteratedCategoryName}`}
        />
        <meta
          name="keywords"
          content={`${transliteratedCategoryName}, ключевые слова`}
        />
        <meta
          property="og:title"
          content={`${transliteratedCategoryName} - ProHockey`}
        />
        <meta
          property="og:description"
          content={`Описание категории ${transliteratedCategoryName}`}
        />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/products/${transliteratedCategoryName}`}
        />
      </Head>
      <ProductsCategory initialProducts={initialProducts} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(`${SERVER_URL}/categories`);
  const categories = res.data;

  const paths = categories.map((category) => ({
    params: { category: category.urlPath },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  try {
    const { data: initialProducts } = await axios.get(
      `${SERVER_URL}/products?category=${category}`
    );

    return {
      props: { initialProducts },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { initialProducts: [] },
    };
  }
}

export default ProductsByCategoryPage;
