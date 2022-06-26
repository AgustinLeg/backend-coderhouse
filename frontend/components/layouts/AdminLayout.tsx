import React, { FC } from "react";
import { NavBar } from "../ui";

interface Props {
  children: any;
}

export const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
