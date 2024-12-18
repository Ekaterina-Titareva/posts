"use client";

import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

import store from "@/src/store/store";

import Layout from "@/src/components/Layout/Layout";

import "./globals.css";

const RootLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="ru">
      <body key="V2" className="min-h-screen">
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
