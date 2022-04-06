import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { ICartProduct } from "../../interfaces/cart";

interface Props {
  product: ICartProduct;
}

const CardItem: FC<Props> = ({ product }) => {
  return (
    <SimpleGrid column="2" templateColumns="25% auto" gap={1}>
      <Image src={product.image} alt={`Foto producto de ${product.name}`} />
      <Stack>
        <Heading as="h3" size="sm">
          {product.name}
        </Heading>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>${product.price}</Text>
          <Text>x{product.quantity}</Text>
        </Flex>
      </Stack>
    </SimpleGrid>
  );
};

export default CardItem;
