import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context";

export const OrderSummary = () => {
  const { cart, subTotal} = useContext(CartContext);
  return (
    <Stack w="full">
      <Flex align="center" justify="space-between">
        <Heading as="h4">Subtotal</Heading>
        <Text>${subTotal}</Text>
      </Flex>
      <Button colorScheme='teal' >Finalizar Compra</Button>
    </Stack>
  );
};
