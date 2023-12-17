import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

export const Product = ({ product }) => {
  const dispatch = useDispatch();

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
            height: "830px",
          }}
        >
          <CardMedia
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            component="img"
            alt="green iguana"
            //  src={product.attributes.image.data.attributes.url}
            image={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
            height="400px"
            width="300px"
            object-fit="cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              {product.attributes.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.attributes.desc}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.attributes.price}$
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.attributes.brand}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.attributes.Category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.attributes.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.isfeatured}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.attributes.title,
                    desc: product.attributes.desc,
                    price: product.attributes.price,
                    image:`http://localhost:1337${product.attributes.image.data[0].attributes.url}`
                  })
                )
              }
            >
              Add TO Cart
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default Product;
