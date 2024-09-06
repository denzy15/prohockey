import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getOrderById } from "../api/api";
import BuyerInfo from "../components/orders/BuyerInfo";
import PurchasedProductsInfo from "../components/orders/PurchasedProductsInfo";

const OrderInfoPageContent = () => {
  const router = useRouter();
  const { _id } = router.query;

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrderInfo() {
      try {
        const res = await getOrderById(_id);
        setOrder(res);
      } finally {
        setLoading(false);
      }
    }

    if (_id) {
      fetchOrderInfo();
    }
  }, [_id]);

  return loading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box>
      <PurchasedProductsInfo
        products={order.products}
        totalPrice={order.totalPrice}
      />
      <BuyerInfo email={order.email} name={order.name} phone={order.phone} />
    </Box>
  );
};

export default OrderInfoPageContent;
