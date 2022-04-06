import { FC, useContext, useState } from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";

import { ICartProduct, IProduct } from "../../interfaces";
import { CartContext } from "../../context";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
    timestamp: "0",
  });

  const { addProductToCart } = useContext(CartContext);

  const onAddProduct = () => {
    addProductToCart(tempCartProduct);
  };

  return (
    <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />

          <Image
            src={product.image}
            alt={`Picture of ${product.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                <NextLink href={`/producto/${product.slug}`} passHref>
                  <LinkOverlay>{product.name}</LinkOverlay>
                </NextLink>
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {Number(product.price).toFixed(2)}
              </Box>
              <Button onClick={onAddProduct}>
                <Icon
                  as={MdOutlineShoppingBag}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                />
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </LinkBox>
  );
};
