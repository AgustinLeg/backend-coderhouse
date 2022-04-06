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
} from "@chakra-ui/react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../../context";
import CardItem from "./CartItem";
import OrderSummary from "./OrderSummary";

export default function CartList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useContext(CartContext);
  const btnRef = useRef(null);

  return (
    <>
      <Button ref={btnRef} variant="ghost" onClick={onOpen}>
        <MdOutlineShoppingBag size={25} />
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
              <Flex direction="column" align="center" justify="space-between" h="full">
                <Box flex={1}>
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
}
