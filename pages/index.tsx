import Head from "next/head";
import { Fragment } from "react";
import { Footer, Header, HomeItem, ScrollToTop } from "../components";

import { HomeItems } from "../data";

export default function Home() {
  return (
    <Fragment>
      <ScrollToTop />
      <Head>
        <title>Electric Cars, Solar & Clean Energy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/tesla.png" />
      </Head>

      <Header />
      {HomeItems.map(({ id, name, subText, image, shopNow }) => (
        <HomeItem
          id={id}
          name={name}
          subText={subText}
          image={image}
          shopNow={shopNow}
        />
      ))}
      <Footer />
    </Fragment>
  );
}
