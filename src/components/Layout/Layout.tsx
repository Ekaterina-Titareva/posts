import { FC, PropsWithChildren } from "react";

import {
  AUTH_PAGE,
  CREATE_PRODUCTS,
  EDIT_PRODUCT,
  HOME_PAGE,
  PRODUCT,
  PRODUCTS,
} from "@/src/constants/routing";

import CustomLink from "../../ui/custom-link/CustomLink";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className="flex flex-col h-screen">
        <div className="w-full h-14 border-b flex gap-2 justify-center items-center">
          <CustomLink href={HOME_PAGE}>Главная страница</CustomLink>
          <CustomLink href={PRODUCTS}>Статьи</CustomLink>
          <CustomLink href={CREATE_PRODUCTS}>Добавить статью</CustomLink>
          <CustomLink href={AUTH_PAGE}>Авторизация</CustomLink>
          <CustomLink href={PRODUCT}>Статья</CustomLink>
          <CustomLink href={EDIT_PRODUCT}>Редактировать статью</CustomLink>
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
