import NextLink from "next/link";
import {
  Container,
  Heading,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { CartItem, OrderSummary } from "../components/cart";
import { AuthContext, CartContext } from "../context";
import { ShopLayout } from "../components/layouts";
import { useRouter } from "next/router";

const FinalizarCompra = () => {
  const { cart } = useContext(CartContext);
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [user]);

  return (
    <ShopLayout>
      {isLoading && (
        <Stack w="100vw" h="100vh" align="center" justify="center">
          <Spinner />
        </Stack>
      )}
      {!isLoading && (
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
            <SimpleGrid
              columns={[1, null, null, 2]}
              gap={5}
              mt={[10, null, 14]}
            >
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
      )}
    </ShopLayout>
  );
};

export default FinalizarCompra;
