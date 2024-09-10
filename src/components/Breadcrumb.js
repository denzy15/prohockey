import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { urlMap } from "@/shared/constants";
import { reverseTransliterate } from "@/shared/utils";

const Breadcrumb = () => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);

  const getTextForPath = (path, index) => {
    if (index === 1) {
      return reverseTransliterate(path);
    }

    const productText = decodeURIComponent(path.split("?")[0]).replace(
      /%20/g,
      " "
    );
    return productText;
  };

  if (!pathnames.length) {
    return null;
  }

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ my: 1 }}
    >
      <Link color="inherit" href="/">
        <Typography sx={{ textDecoration: "underline", color: "gray" }}>
          Главная
        </Typography>
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const text = urlMap[value] || getTextForPath(value, index);

        return last ? (
          <Typography color="background.paper" key={to}>
            {text}
          </Typography>
        ) : (
          <Link href={to} key={to}>
            <Typography sx={{ textDecoration: "underline", color: "gray" }}>
              {text}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
