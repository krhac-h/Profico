// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import NewsCard from "../components/NewsCard";
import { fetchCategory } from "../endpoints";

import Layout from "../layouts/MainLayout";
import SimpleLoading from "../components/SimpleLoading";

const Category = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter"));

  const { data, isLoading } = useQuery({
    queryKey: [`categorie-${category}-${filter}`],
    queryFn: () => fetchCategory({ category: category, q: filter }),
    enabled: category != undefined,

  });

  useEffect(() => {
    setFilter(searchParams.get("filter"));
  }, [searchParams.get("filter")]);



  return (
    <Layout>
      <div className="container">
        <h2>Category: {category}</h2>

        <div className="grid gap grid-cols-3 ">
          <SimpleLoading isLoading={isLoading}></SimpleLoading>
          {!isLoading &&
            data?.articles.map(
              (item, N) => <NewsCard key={`category-${category}-${N}}`} item={item}></NewsCard>
              // <a href={item.u}>
              // <li>{item.title}</li>
              // </a>
            )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
