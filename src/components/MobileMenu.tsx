import { useState } from "react";
import ICO from "../assets/menu.svg";
import ICOX from "../assets/x.svg";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import { listCategory } from "../NavMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
const MobileMenu = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        height: "100%",
      }}
    >
      <button onClick={handleToggle} >
        <ReactSVG src={ICO} className="mob" />
      </button>
      <dialog
        open={isToggled}
        onClick={handleToggle}
        style={{ backgroundColor: "var(--body-bg-color)" }}
      >
        <div className="relative">
          <section className="center">
            <Logo></Logo>
          </section>
          <section>
            <SearchBar isMobile={true}></SearchBar>
          </section>
          <div className="p1 ">
            <nav className="grid grid-cols-3">
              {listCategory.map((item, N) => (
                <NavLink key={`mobile-nav-${N}`}to={`${item.slug}`}>
                  <span className="navLink">
                    <ReactSVG src={item.ico} />
                    <small>{item.text}</small>
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>
          <button
            onClick={handleToggle}
            style={{ position: "absolute", top: "-1rem", right: "-1rem", height: "2rem", width: "2rem", padding:"0"}}
          >
            <ReactSVG src={ICOX} className="mob" />
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default MobileMenu;
