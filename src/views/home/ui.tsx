import { use } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Button, Paragraph, api } from "@/shared";

import s from "./home.module.css";
import { Background } from "@/entities";

export const Home = () => {
  //TODO: Возможно вместо див можно семантический тэг использовать

  // const data = use(
  //   api
  //     .get("places")
  //     .then((res) => {
  //       console.log({ res });
  //     })
  //     .catch((err) => {
  //       console.log({ err });
  //     })
  // );
  // console.log(data);
  return (
    <section className={s.home}>
      {/* Background */}
      <div className={s.home__bg}>
        <Background url="/bg.jpg" />
      </div>

      {/* Title */}

      <div className={s.home__title}>
        <Paragraph level={2}>Helping others</Paragraph>
        <Paragraph level={1}>Live & travel</Paragraph>
        <Paragraph>Special offers to suit your plan</Paragraph>
      </div>

      <form className={s.searching}>
        <a>+Add Promo Code</a>
        <button type="submit" />
      </form>

      <Button variant="secondary">Button</Button>
    </section>
  );
};
