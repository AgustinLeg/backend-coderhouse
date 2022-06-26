import React, { useContext } from "react";
import NextLink from "next/link";
import {
  Avatar,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { AuthContext } from "../../context";

const UserMenu = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const toast = useToast();

  const handleLogout = () => {
    toast({
      status: "info",
      description: "Sesion cerrada con exito",
    });
    logoutUser();
  };

  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Avatar size={"sm"} />
            </HStack>
          </MenuButton>
          {!user && (
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>
                <NextLink href="/login" passHref>
                  <Link w="full" p={1}>
                    Iniciar Sesion
                  </Link>
                </NextLink>
              </MenuItem>
              <MenuItem>
                <NextLink href="/register" passHref>
                  <Link w="full" p={1}>
                    Crear Cuenta
                  </Link>
                </NextLink>
              </MenuItem>
            </MenuList>
          )}
          {user && (
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </MenuList>
          )}
        </Menu>
      </Flex>
    </HStack>
  );
};

export default UserMenu;
