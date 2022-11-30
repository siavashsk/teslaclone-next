import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";
import { HomeItems } from "../data";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Electric Cars, Solar & Clean Energy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/tesla.png" />
      </Head>

      <Header />
      {HomeItems.map(({ id, name, subText, image }) => (
        <HomeItem id={id} name={name} subText={subText} image={image} />
      ))}
      <Footer />
    </Fragment>
  );
}
