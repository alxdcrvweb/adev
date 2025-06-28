import classNames from "classnames";
import Link from "next/link";
import { links } from "./variables";

const NavMenu = ({menu}:{menu:boolean}) =>{
    return (
        <nav className={classNames("menu", menu && "active")}>
        <div className="container">
          <div className="row">
            <ul className="list">
              {links.map((el,i) => {
                return (
                  <li key={el.title}>
                    <div className="num">0{i+1}</div>
                    <Link href={el.href}>{el.title}</Link><img src="../../arrow_hover.svg"/>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavMenu