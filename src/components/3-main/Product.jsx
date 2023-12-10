import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";

export const Product = ({ product }) => {

  return (
    <Container
      sx={{
        width: "350px",
      }}
    >
      <Stack>
        <Card
          sx={{
            boxShadow: "10px 10px 2px 1px rgba(0, 0, 250,.1)",
            marginBottom: "40px",
            width: "310px",
            height: "650px",
          }}
        >
          <CardMedia
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            component="img"
            alt="green iguana"
            image={product.images[0]}
            height="350px"
            width="300px"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.price}$
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.brand}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add TO Cart</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default Product;
