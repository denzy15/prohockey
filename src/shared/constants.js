import { Instagram, WhatsApp } from "@mui/icons-material";

// export const SERVER_URL = "https://prohockey-server.onrender.com";
export const SERVER_URL = "http://localhost:5000";

export const urlMap = {
  cart: "Корзина",
  products: "Каталог",
  checkout: "Оформление заказа",
  contacts: "Контакты",
  ["delivery-payment"]: "Доставка и оплата",
  ["thank-you"]: "Благодарность",
};

export const socialLinks = [
  { icon: <WhatsApp />, href: "https://wa.me/+77752053441", title: "WhatsApp" },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/prohockeykz/",
    title: "Instagram",
  },
];
