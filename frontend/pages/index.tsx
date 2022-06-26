import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";

import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";

import { useProducts } from "../hooks/useProducts";

import { IProduct } from "../interfaces";

const Home: NextPage = () => {
  const { products } = useProducts("/products") as { products: IProduct[] };

  return (
    <ShopLayout>
      <Box p={5}>
        <Heading mb={10} size="2xl">
          Productos
        </Heading>
        <ProductList products={products} />
      </Box>
    </ShopLayout>
  );
};

export default Home;
