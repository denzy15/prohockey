import { SERVER_URL } from "@/shared/constants";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CategoryCard = ({ category }) => {
  const router = useRouter();

  const { asPath } = router;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ bgcolor: "white" }}>
        <Link href={`${asPath}/${category.urlPath}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={`${SERVER_URL}/${category.photo}`}
              height="190"
              alt={category.name}
              sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ bgcolor: "primary.light" }}>
              <Typography
                variant="body2"
                sx={{
                  color: "background.paper",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {category.name.toUpperCase()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

export default CategoryCard;
