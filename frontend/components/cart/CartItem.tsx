import { FC, useContext } from "react";
import {
  IconButton,
  Flex,
  Heading,
  Image,
  ButtonGroup,
  Text,
  SimpleGrid,
  Box,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { RiDeleteBin7Line, RiAddFill, RiSubtractFill } from "react-icons/ri";
import { CartContext } from "../../context";
import { ICartProduct } from "../../interfaces";

interface Props {
  product: ICartProduct;
}

export const CartItem: FC<Props> = ({ product }) => {
  const { removeCartProduct, addProductToCart, updateCartQuantity } =
    useContext(CartContext);

  return (
    <>
      <SimpleGrid
        column="3"
        templateColumns="25% 65% auto"
        gap={1}
        w="full"
        mb={2}
      >
        <Image
          src={product.images}
          height="100px"
          alt={`Foto producto de ${product.title}`}
        />
        <Flex direction="column" align="start">
          <Box
            alignItems="flex-start"
            display="flex"
            flexDirection="column"
            flex={1}
          >
            <Heading as="h3" size="sm">
              {product.title}
            </Heading>
            <Text fontSize="sm">${product.price}</Text>
          </Box>
          <ButtonGroup size="sm" isAttached variant="ghost" alignItems="center">
            <IconButton
              aria-label="Subtract product"
              icon={<RiSubtractFill />}
              onClick={() =>
                updateCartQuantity({
                  ...product,
                  quantity: product.quantity - 1,
                })
              }
              disabled={product.quantity === 1}
            />
            <Text w={16} textAlign="center">
              {product.quantity}
            </Text>
            <IconButton
              aria-label="Add product"
              icon={<RiAddFill />}
              onClick={() => addProductToCart(product)}
              disabled={product.quantity === product.inStock}
            />
          </ButtonGroup>
        </Flex>
        <Icon
          aria-label="Delete product"
          p={0}
          color="red.500"
          fontSize={18}
          as={RiDeleteBin7Line}
          role="button"
          onClick={() => removeCartProduct(product.id)}
        />
      </SimpleGrid>
      <Divider />
    </>
  );
};
