import React, { PropsWithChildren } from "react";
import { clsx } from "clsx";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/widgets";

import s from "./layout.module.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--var-roboto",
});

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <body className={clsx(s.layout, roboto.variable)}>
      <Header />
      <main className={s.content}>{children}</main>
      <Footer />
    </body>
  );
};
