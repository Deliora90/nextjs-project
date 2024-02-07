import React from "react";
import Link from "next/link";

import s from "./styles.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={s.navigation}>
        <li className={s.navigation__item}>
          <Link href="/">Find Flight</Link>
        </li>
        <li className={s.navigation__item}>
          <Link href="/">Find Stays</Link>
        </li>
      </ul>
    </nav>
  );
};
