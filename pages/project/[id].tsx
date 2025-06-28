import Head from "next/head";
import Footer from "../../components/pageHomeRedesign/footer";
import Basics from "../../components/ProjectPage/basics";
import Header from "../../components/ProjectPage/header";
import Solutions from "../../components/ProjectPage/solutions";
import Technical from "../../components/ProjectPage/technical";
import { useEffect, useRef, useState } from "react";
import { IProject, projects } from "../../components/AllProjectsPage/projects";
const Project = () => {
  const [currentProject, setCurrentProject] = useState<IProject | null>(null);
  const ref = useRef(null);
  useEffect(() => {
    let proj = window.location.pathname.split("/")[2];
    console.log(proj);
    setCurrentProject(projects[Number(proj)]);
  }, []);
  useEffect(() => {
    if (ref) {
      //@ts-ignore
      ref.current.scrollIntoView({
        block: "start",
        inline: "start",
      });
    }
  }, [ref]);

  return (
    <div className="page--project" ref={ref}>
      <Head>
        <title>▷▢ Another.DEV – Project</title>
        <meta
          name="description"
          content="We offer a wide range of blockchain, NFT and cryptocurrencies solutions development and creative services (incl. DApps, marketplaces, NFT collections, DeFi, P2E games, wallets and more)"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Header name={currentProject?.name} image1={currentProject?.image1} />
      <div className="content">
        <Basics
          project={currentProject?.project}
          result={currentProject?.result}
          links={currentProject?.links}
          inputs={currentProject?.inputs}
          image2={currentProject?.image2}
        />
        <Solutions solutions={currentProject?.solutions} />
        <Technical
          technology={currentProject?.technology}
          dev={currentProject?.development}
          image3={currentProject?.image3}
        />
        <Footer />
      </div>
    </div>
  );
};
export default Project;
