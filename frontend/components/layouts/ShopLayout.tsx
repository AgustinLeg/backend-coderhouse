import { Container } from "@chakra-ui/react";
import React, { FC } from "react";
import { NavBar } from "../ui";

interface Props {
  children: any;
}

export const ShopLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container as="main" maxW="1260px">
        {children}
      </Container>
    </>
  );
};
