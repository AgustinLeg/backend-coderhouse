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
import { CartContext } from "../../context";
import { CartItem } from ".";
import NextLink from "next/link";

export const CartList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, subTotal } = useContext(CartContext);
  const btnRef = useRef(null);

  return (
    <>
      <Button ref={btnRef} variant="ghost" onClick={onOpen} p={0}>
        <RiShoppingBag3Line size={25} />
        {cart.length > 0 && <Text fontSize="sm">{cart.length}</Text>}
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
                <Stack w="full">
                  <Flex align="center" justify="space-between">
                    <Heading as="h4" size="md">
                      Subtotal
                    </Heading>
                    <Text>${subTotal}</Text>
                  </Flex>

                  <Button variant="brand">
                    <NextLink href="/finalizar-compra" passHref>
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
