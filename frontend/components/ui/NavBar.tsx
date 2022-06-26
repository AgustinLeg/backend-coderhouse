import NextLink from "next/link";
import { Flex, HStack, SimpleGrid, Link, Button } from "@chakra-ui/react";

// import { RiShoppingBag3Line, RiUser3Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { CartList } from "../cart";
import UserMenu from "./UserMenu";

export const NavBar = () => {
  return (
    <SimpleGrid
      columns={{ base: 3 }}
      gridTemplateColumns="auto 1fr auto"
      px={{ base: 1, lg: 5 }}
      py={2}
    >
      {/* Logo */}
      <NextLink href="/">Logo</NextLink>
      {/* NavBar links */}
      <Flex align="center" justify="center">
        <NextLink href="/" passHref>
          <Link>Shop</Link>
        </NextLink>
      </Flex>
      {/* Button actions for cart-favs-login */}
      <HStack gap={0}>
        <UserMenu />
        <Button variant="ghost" p={0} m={0}>
          <AiOutlineHeart size={25} />
        </Button>
        <CartList />
      </HStack>
    </SimpleGrid>
  );
};
