import { useRouter } from "next/router";
import { useProducts } from "../../hooks/useProducts";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { IProduct } from "../../interfaces/products";
import MainLayout from "../../components/layouts/MainLayout";
import { useContext } from "react";
import { CartContext } from "../../context";

const ProductDetails = () => {
  const {
    query: { slug },
  } = useRouter();
  const { products } = useProducts(`/productos/${slug}`) as {
    products: IProduct;
    isLoading: boolean;
    isError: any
  };

  const CartProduct = {...products, quantity: 1, timestamp: '2020-01-01'};


  const { addProductToCart } = useContext(CartContext);

  const onAddProduct = () => {
    addProductToCart(CartProduct);
  };
  
  return (
    <MainLayout>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={products.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {products.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${products.price}
              </Text>
            </Box>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={onAddProduct}
            >
              Add to cart
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </MainLayout>
  );
};

export default ProductDetails;
