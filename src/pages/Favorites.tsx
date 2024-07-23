
import Layout from "../layouts/MainLayout";

import { useBookmarkContext } from "../components/BookmarkContext";
import NewsCard from "../components/NewsCard";

interface Source {
  key: string;
  name: string;
  category: string;
  mark: any;
  setMark: any;
}

interface Article {
  title: string;
  author: string;
  urlToImage: string;
  source: {
    name: string;
  };
  // Add other properties as needed
}

interface NewsItem {
  item: Article;
  CATS: {
    sources: Source[];
  };
  mark: any,
  setMark: any,
}

const Favorites = () => {
    const { mark} = useBookmarkContext();

  return (
    <Layout>

      <div className="container">
        <div>
          <h2>Favorites</h2>
          <div className="grid gap grid-cols-3">
            {mark.map((item: NewsItem, N: number) => (
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
