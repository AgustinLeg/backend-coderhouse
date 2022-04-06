import React, { FC } from "react";
import NavBar from "../ui/NavBar";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
