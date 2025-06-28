import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import type { NextPage } from "next";
import React, { useRef, useEffect, useState } from "react";
import { UserStore } from "../stores/UserStore";
import s from "./home.module.sass";
import Head from "next/head";
import Header from "../components/pageHomeRedesign/header";
import Collaborate from "../components/pageHomeRedesign/collaborate";
import Projects from "../components/pageHomeRedesign/projects";
import NewsBlog from "../components/pageHomeRedesign/newsBlog";
import Footer from "../components/pageHomeRedesign/footer";
const Home: NextPage = observer((props) => {
  const userStore = useInjection(UserStore);
  const collaborate = useRef();
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
  useEffect(() => {
    document?.querySelector('body')?.addEventListener('scroll', (e:any) => {
      let scrollTop = e?.target.scrollTop
      if(scrollTop > userStore.sliderAlignmentTop ) {
        userStore.setSliderPosition(e?.target.scrollTop)

      }
  }, false)
      return () => {
        document?.querySelector('body')?.removeEventListener('scroll',()=>{})
      } 
  }, [])
  return (
    <div className={s.main} style={{opacity: !userStore.loaded ? 0 : 1}} ref={ref}>
      <Head>
        <title>▷▢ Another.DEV – Blockchain Development Services</title>
        <meta
          name="description"
          content="We offer a wide range of blockchain, NFT and cryptocurrencies solutions development and creative services (incl. DApps, marketplaces, NFT collections, DeFi, P2E games, wallets and more)"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Header collaborate={collaborate}/>
      <div className="content">
        <Collaborate collaborate={collaborate} />
        <Projects loaded={userStore.loaded}/>
        <NewsBlog />
        <Footer />
      </div>
    </div>
  );
});

export default Home;
