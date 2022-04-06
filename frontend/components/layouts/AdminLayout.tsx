import React, { FC } from "react";
import NavBar from "../ui/NavBar";

export const AdminLayout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
