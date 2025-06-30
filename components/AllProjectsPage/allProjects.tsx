import Link from "next/link";
import { projects } from "./projects";

const AllProjects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects--wrapper">
          <div className="item">
            <div className="item--wrapper">
              <div className="block">
                <div className="left">
                  <div className="wrapper">
                    <div className="flex">
                      <h2 className="h2">
                        ICW <span>ICW</span>
                      </h2>
                      <div className="date">06-12-2021</div>
                    </div>
                    <h2 className="h2">
                      PIXELSEALS <span>PIXELSEALS</span>
                    </h2>
                  </div>
                  <div className="flex">
                    <Link href={`project/0`}>
                      <a className="button">
                        <div className="text">Case Study</div>
                      </a>
                    </Link>
                    <span className="by">BY: Another Dev</span>
                  </div>
                </div>
                <div className="right">
                  <img src="img/NERP 3.png" alt="ICW PIXELSEALS" />
                </div>
              </div>
            </div>
          </div>
          {projects.map((el, i) => {
            if (i !== 0) {
              return (
                <Link href={`project/${i}`} key={i}>
                  <a className="item">
                    <div className="item--wrapper">
                      <div className="concepts">
                        <p className="concept">web 3</p>
                        <p className="concept">end-to end development</p>
                      </div>
                      <div className="block">
                        <div className="left">
                          <h3 className="h3">
                            {el.name} <span>{el.name}</span>
                          </h3>
                          <span className="by">by: Another Dev</span>
                          <div className="date">06-12-2021</div>
                        </div>
                        <div className="right">
                          <img src={el?.logo ? el.logo : "img/prog3.png"} alt="MORPHEUS NFT" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
export default AllProjects;
