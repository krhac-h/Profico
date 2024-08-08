// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";

import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchNews, fetchSources, Article } from "../endpoints";

import { useBookmarkContext } from "../components/BookmarkContext";

import Layout from "../layouts/MainLayout";
import PopupBar from "../components/PopupBar";
import NewsCard from "../components/NewsCard";

import LatestNews from "../components/Homepage/LatestNews";
import Tabs from "../components/Tabs";
import SimpleLoading from "../components/SimpleLoading";

interface NewsResponse {
  page: number;
  articles: Article[];
}


const Homepage = () => {
  ////////////////////////////////////////////////////
  const { ref, inView } = useInView();
  const { mark, setMark } = useBookmarkContext();
  const [searchParams, setSearchParams] = useSearchParams();

  ////////////////////////////////////////////////////
  const { data: CATS } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchSources,
  });

  const {
    data: NEWS,
    isLoading: NewsLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery<NewsResponse>({
    queryKey: ["news"],
    queryFn: () => fetchNews({ q: searchParams.get("filter") }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
    enabled: searchParams.get("filter") !== null,
  });

  ////////////////////////////////////////////////////
  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, isFetchingNextPage]);

  useEffect(() => {
    window.localStorage.setItem("bookmarked_array", JSON.stringify(mark));
  }, [mark]);


  const isItemMarked = (title: string) => {
    return mark.some((item) => item.title === title);
  };
  ////////////////////////////////////////////////////

  return (



    <Layout popup={<PopupBar></PopupBar>}>
      <div>
        <Tabs>
          <h2 className="pc">News</h2>
          <section className="grid gap grid-cols-3">
            <SimpleLoading isLoading={NewsLoading}></SimpleLoading>
            <article
              className="pc"
              style={{ gridColumn: "3 / 4", gridRow: "1 / 3" }}
            >
              <LatestNews></LatestNews>
            </article>

            {NEWS?.pages.map((page) =>
              page.articles.map((item: any, N: number) =>
                item.title === "[Removed]" ? (
                  ""
                ) : (
                  <NewsCard key={`homepage-news-card-${N}`}
                    item={item}
                    CATS={CATS}
                    isMarked={isItemMarked(item.title)}
                    mark={mark}
                    setMark={setMark}
                  ></NewsCard>
                )
              )
            )}

          </section>
          <section ref={ref}>Loading more.. </section>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Homepage;
