import React from "react";
import Link from "next/link";

import s from "./styles.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={s.navigation}>
        <li className={s.navigation__item}>
          <Link href="/">Link 1</Link>
        </li>
        <li className={s.navigation__item}>
          <Link href="/">Link 2</Link>
        </li>
      </ul>
    </nav>
  );
};
