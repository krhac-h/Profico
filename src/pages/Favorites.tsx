// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Layout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";

import { useBookmarkContext } from "../components/BookmarkContext";
import NewsCard from "../components/NewsCard";
const Favorites = () => {
    const { mark} = useBookmarkContext();

  return (
    <Layout>

      <div className="container">
        <div>
          <h2>Favorites</h2>
          <div className="grid gap grid-cols-3">
            {mark.map((item: any, N: number) => (
              <NewsCard key={`favorites-card-${N}`}
              item={item}
              ></NewsCard>
            ))}
            </div>
        </div>
      </div>

    </Layout>
  );
};

export default Favorites;
