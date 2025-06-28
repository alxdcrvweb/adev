import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import type { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { UserStore } from "../stores/UserStore";
import s from "./home.module.sass";
import Head from "next/head";
import Collaborate from "../components/pageHomeRedesign/collaborate";
import NewsBlog from "../components/pageHomeRedesign/newsBlog";
import Footer from "../components/pageHomeRedesign/footer";
import Header from "../components/AllProjectsPage/header";
import AllProjects from "../components/AllProjectsPage/allProjects";

const Projects: NextPage = observer((props) => {
  const ref = useRef(null)
  useEffect(()=>{
    if(ref) {
      //@ts-ignore
      ref.current.scrollIntoView({
        block: "start",
        inline: "start",
      })
    }
  },[ref])
  return (
    <div className="page--projects" ref={ref}>
      <Head>
        <title>▷▢ Another.DEV – Projects</title>
        <meta
          name="description"
          content="We offer a wide range of blockchain, NFT and cryptocurrencies solutions development and creative services (incl. DApps, marketplaces, NFT collections, DeFi, P2E games, wallets and more)"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Header/>
      <div className="content">
        <AllProjects/>
        <Footer />
      </div>
    </div>
  );
});

export default Projects
