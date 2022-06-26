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
  Spinner,
} from "@chakra-ui/react";

import { IProduct } from "../../interfaces/products";
import { ShopLayout } from "../../components/layouts";
import { useContext } from "react";
import { CartContext } from "../../context";

const ProductDetails = () => {
  const {
    query: { slug },
  } = useRouter();
  const {
    products: product,
    isLoading,
    isError,
  } = useProducts(`/products/${slug}`) as {
    products: IProduct;
    isLoading: boolean;
    isError: any;
  };

  const { addProductToCart } = useContext(CartContext);

  if (!isLoading && isError)
    return (
      <ShopLayout>
        <Text>Hubo un error al obtener el producto</Text>
      </ShopLayout>
    );

  const { title, price, images } = product;
  return (
    <ShopLayout>
      {isLoading && (
        <Stack align="center" justify="center" w="100vw" h="100vh">
          <Spinner />
        </Stack>
      )}
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded="md"
              alt="product image"
              src={images ? images[0] : ""}
              fit="cover"
              align="center"
              w="100%"
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as="header">
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize="2xl"
              >
                ${price}
              </Text>
            </Box>

            <Button variant="brand" onClick={() => addProductToCart(product)}>
              Agregar al carrito
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </ShopLayout>
  );
};

export default ProductDetails;
