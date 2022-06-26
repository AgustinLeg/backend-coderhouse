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
import { ICartProduct } from "../../interfaces/cart";
import { CartContext } from "../../context";

interface Props {
  product: ICartProduct;
}

export const CartItem: FC<Props> = ({ product }) => {
  const { removeCartProduct } = useContext(CartContext);

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
          src={product.images[0]}
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
            />
            <Text w={16} textAlign="center">
              {product.quantity}
            </Text>
            <IconButton aria-label="Add product" icon={<RiAddFill />} />
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
