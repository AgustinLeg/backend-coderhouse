import NextLink from "next/link";
import { Flex, HStack, SimpleGrid, Link } from "@chakra-ui/react";

import { CartList } from "../cart";
import UserMenu from "./UserMenu";
import { useContext } from "react";
import { AuthContext } from "../../context";

export const NavBar = () => {
  const { user } = useContext(AuthContext);

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
          <Link>Inicio</Link>
        </NextLink>
      </Flex>
      {/* Button actions for cart-favs-login */}
      <HStack gap={0}>
        {!user && (
          <HStack>
            <NextLink href="/login" passHref>
              <Link bg="brand" color="white" p="4px 6px" rounded="sm">
                Iniciar Sesion
              </Link>
            </NextLink>
          </HStack>
        )}
        {user && <UserMenu />}
        <CartList />
      </HStack>
    </SimpleGrid>
  );
};
