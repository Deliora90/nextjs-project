import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/features";

import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__nav}>
        <Navigation />
      </div>
      <div className={s.header__logo}>
        <Link href="/">
          <Image src="/logo.svg" priority alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div className={s.header__auth}>
        <a>Login</a>
        <a>Sign up</a>
      </div>
    </header>
  );
};
