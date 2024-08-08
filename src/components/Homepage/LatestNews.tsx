//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//  @ts-nocheck

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchLatestNews } from "../../endpoints";

import ICO from "../../assets/RedBar.svg";

interface Article {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface LatestNewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const LatestNews = () => {
  const { data, isLoading } = useQuery<LatestNewsResponse>({
    queryKey: ["LatestNews"],
    queryFn: fetchLatestNews,
  });

  return (
    <>
      <div className="p1 ">
        <h6>
          <img
            src={ICO}
            style={{ width: "1.2em", marginInlineEnd: "0.3rem" }}
          ></img>
          Latest news
        </h6>
        <div style={{ overflowY: "scroll", maxHeight: "50vh" }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.articles.map((item: Article, N: number) =>
              item.title === "[Removed]" ? (
                ""
              ) : (
                <hgroup key={N} className="anim-pop">
                  <hr />
                  <sub className="category">
                    {item.publishedAt.split("T")[1].slice(0, 5)}
                  </sub>
                  <br></br>
                  <small className="line-clamp-1">
                    {item.title.slice(0, 50)}..
                  </small>
                </hgroup>
              )
            )
          )}
        </div>
      </div>
      <footer className="p1">
        <Link className="category" to="/">
          See all news &gt;
        </Link>
      </footer>
    </>
  );
};

export default LatestNews;
