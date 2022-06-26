import { useRef, useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Text,
  VStack,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AuthContext, CartContext } from "../../context";
import { CartItem } from ".";
import NextLink from "next/link";

export const CartList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, total, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const btnRef = useRef(null);

  return (
    <>
      <Button
        ref={btnRef}
        variant="ghost"
        onClick={onOpen}
        p={0}
        position="relative"
      >
        <RiShoppingBag3Line size={25} />
        {!!cart.length && (
          <Box
            position="absolute"
            bg="brand"
            color="white"
            top={0}
            right={0}
            w={5}
            h={5}
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xs">{cart.length}</Text>
          </Box>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tu carrito</DrawerHeader>

          <DrawerBody maxH="100vh">
            {cart.length > 0 ? (
              <Flex
                direction="column"
                align="center"
                justify="space-between"
                h="full"
              >
                <Box flex={1} w="full">
                  {cart.map((item) => (
                    <CartItem key={item.id} product={item} />
                  ))}
                </Box>
                <Stack w="full" spacing={5}>
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    colorScheme="red"
                  >
                    Vaciar carrito
                  </Button>
                  <Flex align="center" justify="space-between">
                    <Heading as="h4" size="md">
                      Subtotal
                    </Heading>
                    <Text>${total}</Text>
                  </Flex>
                  <Button variant="brand">
                    <NextLink
                      href={
                        user
                          ? "/finalizar-compra"
                          : "/login?next=%2Ffinalizar-compra"
                      }
                      passHref
                    >
                      <Link w="full" py={2}>
                        Finalizar Compra
                      </Link>
                    </NextLink>
                  </Button>
                </Stack>
              </Flex>
            ) : (
              <VStack spacing={10}>
                <Text>Carrito vacio</Text>
                <Button onClick={onClose} variant="brand">
                  Continuar compra
                </Button>
              </VStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
