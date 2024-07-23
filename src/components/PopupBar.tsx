import { useState } from "react";

const PopupBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="pc">
      <div
        style={{
          background: "linear-gradient(180deg, #BB1E1E 71.29%, #B21919 99.95%)",
          fontSize: "10px",
          color: "white",
          display: clicked ? "none" : "block",
        }}
      >
        <div className="container">
          <nav style={{ padding: "0" }}>
            <ul>
              <li>
                <b style={{ color: "white", fontSize: "16px" }}>
                  Make MyNews your homepage
                </b>
              </li>
              <li>
                <span style={{ color: "white", fontSize: "16px" }}>
                  Every day discover what’ s trending on the internet!
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <b
                  style={{ color: "white", fontSize: "16px" }}
                  onClick={() => setClicked(true)}
                >
                  No, thanks
                </b>
              </li>
              <li>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "2px solid transparent",
                    fontSize: "16px",
                    fontWeight: "800",
                    borderRadius: "var(--border-radius)",
                    padding: "0.5rem 1rem"
                  }}
                >
                  GET
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PopupBar;
