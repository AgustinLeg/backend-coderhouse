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
} from "@chakra-ui/react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { CartContext } from "../../context";
import { OrderSummary, CardItem } from ".";

export const CartList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useContext(CartContext);
  const btnRef = useRef(null);

  return (
    <>
      <Button ref={btnRef} variant="ghost" onClick={onOpen} p={0}>
        <RiShoppingBag3Line size={25} />
        {cart.length > 0 && <Text fontSize='sm'>{cart.length}</Text>}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
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
                    <CardItem key={item.id} product={item} />
                  ))}
                </Box>
                <OrderSummary />
              </Flex>
            ) : (
              <p>Carrito vacio</p>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
