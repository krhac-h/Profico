// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import NewsCard from "../components/NewsCard";
import { fetchCategory } from "../endpoints";

import Layout from "../layouts/MainLayout";
import SimpleLoading from "../components/SimpleLoading";
const Category = () => {
  const { category } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [`categorie-${category}`],
    queryFn: () => fetchCategory({ category }),
    enabled: category != undefined,
  });

  // const { data: CATS, isLoading: CatLoading } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: fetchSources,
  // });

  return (
    <Layout>
      <div className="container">
        <h2>Category: {category}</h2>
        
        <div className="grid gap grid-cols-3 ">
          <SimpleLoading isLoading={isLoading}></SimpleLoading>
          {!isLoading &&
            data?.articles.map(
              (item , N) => <NewsCard key={`category-${category}-${N}}`} item={item}></NewsCard>
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
