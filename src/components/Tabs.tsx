import "../styles/Homepage/MobileBtn.css";

import { useState } from "react";
import LatestNews from "../styles/Homepage/LatestNews";

interface Props {
  tabs?: React.ReactNode;
  children?: React.ReactNode;
}


const Tabs: React.FC<Props> = ({ children }) => {
  const [latest, setLatest] = useState(false);

  return (
    <div>
      <div className="mob">
        <section className=" mobile-btn-wrapper">
          <button
            className={`secondary ${!latest && "active"}`}
            onClick={() => {
              setLatest(false);
            }}
          >
            Featured
          </button>
          <button
            className={`secondary ${latest && "active"}`}
            onClick={() => {
              setLatest(true);
            }}
          >
            Latest
          </button>
        </section>
      </div>

      {!latest ? children : <article><LatestNews /></article>}
    </div>
  );
};

export default Tabs;
