import {
  AUTH_PAGE,
  CREATE_PRODUCTS,
  EDIT_PRODUCT,
  HOME_PAGE,
  PRODUCT,
  PRODUCTS,
} from "@/src/constants/routing";
import { FC, PropsWithChildren } from "react";
import CustomLink from "../custom-link/CustomLink";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className="flex flex-col h-screen">
        <div className="w-full h-14 border-b flex gap-2 justify-center items-center">
          <CustomLink href={HOME_PAGE}>Home page</CustomLink>
          <CustomLink href={PRODUCTS}>Products</CustomLink>
          <CustomLink href={CREATE_PRODUCTS}>Create Products</CustomLink>
          <CustomLink href={AUTH_PAGE}>Auth</CustomLink>
          <CustomLink href={PRODUCT}>Product</CustomLink>
          <CustomLink href={EDIT_PRODUCT}>Edit-Product</CustomLink>
        </div>
        <div className="h-full">{children}</div>
        <div className="w-full h-14 border-t flex justify-center items-center">
          Footer
        </div>
      </main>
    </>
  );
};

export default Layout;
