import { FC } from "react";
import { ProductCard } from "./";
import { IProduct } from "../../interfaces";
import { Grid, GridItem } from "@chakra-ui/react";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid
      templateColumns={{
        base: "1",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      justifyContent="center"
      gap={6}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};
