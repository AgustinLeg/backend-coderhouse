import { FC, useContext } from "react";
import NextLink from "next/link";
import {
  Flex,
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { IProduct } from "../../interfaces";
import { CartContext } from "../../context";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <LinkBox
      p={5}
      w="full"
      maxW="350px"
      m="10px"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Box h="60%">
        <Image
          m="auto"
          src={product.images}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          h="full"
          objectFit="cover"
        />
      </Box>
      <Box>
        <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight">
          <NextLink href={`/producto/${product.slug}`} passHref>
            <LinkOverlay fontSize="lg" fontWeight="bold">
              {product.title}
            </LinkOverlay>
          </NextLink>
        </Box>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              $
            </Box>
            {product.price}
          </Box>
        </Flex>
      </Box>
      <Button w="full" onClick={() => addProductToCart(product)}>
        Agregar al carrito
      </Button>
    </LinkBox>
  );
};
