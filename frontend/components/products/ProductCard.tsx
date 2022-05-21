import { FC } from "react";
import NextLink from "next/link";
import {
  Flex,
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Button,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <LinkBox as="article" position="relative" cursor="pointer">
      <Image
        src={product.images[0]}
        alt={`Picture of ${product.name}`}
        w="full"
      />
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Box>
          <NextLink href={`/producto/${product.slug}`} passHref>
            <LinkOverlay as="h4" fontSize="lg" fontWeight="bold">
              {product.name}
            </LinkOverlay>
          </NextLink>
          <Text as="span" fontSize="sm" color="gray.500">
            {product.description}
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            <Text as="span" color={"gray.600"}>
              $
            </Text>
            {Number(product.price).toFixed(2)}
          </Text>
        </Box>
        <Button variant="ghost" p={0}>
          <AiOutlineHeart size={25} />
        </Button>
      </Flex>
    </LinkBox>
  );
};
