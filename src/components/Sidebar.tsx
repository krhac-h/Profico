import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

interface Props {
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
}

import { listCategory } from "../NavMenu";

const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className="container">
      <div id="sidebar" className=" grid gap">
        <div className="pc">
          {props.sidebar || (
            <aside style={{ top: "1rem", position: "sticky" }}>
              <nav>
                <ul>
                  {listCategory.map((item, N) => (
                    <li className="anim-pop"
                    key={`sidebar-nav-${N}`}
                    >
                      <NavLink
                        to={`${item.slug}`}
                      >
                        <span className="navLink">
                          <ReactSVG src={item.ico} />
                          <small>{item.text}</small>
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>
        <div>
          {props.children || (
            <article>
              <h1>No content..</h1>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
