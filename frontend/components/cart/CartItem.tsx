import { FC } from "react";
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
} from "@chakra-ui/react";
import { RiDeleteBin7Line, RiAddFill, RiSubtractFill } from "react-icons/ri";
import { ICartProduct } from "../../interfaces/cart";

interface Props {
  product: ICartProduct;
}

export const CardItem: FC<Props> = ({ product }) => {
  return (
    <>
      <SimpleGrid column="3" templateColumns="25% 65% auto" gap={1} w="full" mb={2}>
        <Image src={product.image} alt={`Foto producto de ${product.name}`} />
        <Flex direction="column" align="start">
          <Box justifyContent="space-between" alignItems="center" flex={1}>
            <Heading as="h3" size="sm">
              {product.name}
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
        <IconButton
          aria-label="Delete product"
          variant="ghost"
          icon={<RiDeleteBin7Line />}
        />
      </SimpleGrid>
      <Divider />
    </>
  );
};
