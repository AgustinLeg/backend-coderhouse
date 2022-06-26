import NextLink from "next/link";
import {
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartItem, OrderSummary } from "../components/cart";
import { CartContext } from "../context";
import { ShopLayout } from "../components/layouts";

const FinalizarCompra = () => {
  const { cart } = useContext(CartContext);

  return (
    <ShopLayout>
      <Container maxW="full" my={5} textAlign="center">
        <Heading>Finalizar Compra</Heading>
        {/* Carrito vacio */}
        {!cart.length && (
          <VStack
            w="full"
            bg="secondary"
            borderBottom="1px solid"
            borderColor="gray"
            align="flex-start"
            p={5}
            mt={[10, null, 14]}
          >
            <Text>Tu carrito esta vacio.</Text>
            <NextLink href="/" passHref>
              <Link bg="brand" p="10px 5px" rounded="lg" color="white">
                Volver a la tienda
              </Link>
            </NextLink>
          </VStack>
        )}

        {/* carrito */}
        {!!cart.length && (
          <SimpleGrid columns={[1, null, null, 2]} gap={5} mt={[10, null, 14]}>
            {/* Productos del carrito */}
            <VStack>
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </VStack>

            {/* Resumen del pedido */}
            <OrderSummary />
          </SimpleGrid>
        )}
      </Container>
    </ShopLayout>
  );
};

export default FinalizarCompra;
