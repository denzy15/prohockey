import "@/styles/globals.css";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import AdminLayout from "@/layouts/AdminLayout";
import MainLayout from "@/layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "@/modules/cart";
import { AppProvider } from "@/context/AppContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isAdminRoute = router.pathname.startsWith("/admin");

  const Layout = isAdminRoute ? AdminLayout : MainLayout;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Купите лучшие хоккейные аксессуары у нас!"
        />
        <meta name="keywords" content="хоккей, аксессуары, заточка" />
        <meta name="author" content="ProHockey" />
        <title>ProHockey - магазин хоккейных аксессуаров и услуг</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProHockey" />
        <meta
          property="og:url"
          content={`https://prohockey.kz${router.asPath}`}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <AppProvider>
            <Layout>
              <div className={inter.className}>
                <Component {...pageProps} />
              </div>
            </Layout>
          </AppProvider>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="dark"
          />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
