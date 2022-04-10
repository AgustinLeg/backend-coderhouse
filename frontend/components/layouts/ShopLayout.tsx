import React, { FC } from "react";
import {NavBar} from "../ui";

export const ShopLayout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
