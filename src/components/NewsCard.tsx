import ArticleImage from "./ArticleImage";
import { useBookmarkContext } from "../components/BookmarkContext";

interface Source {
  key: string;
  name: string;
  category: string;
  mark: any;
  setMark: any;
}

interface Article {
  title: string;
  author: string | null;
  urlToImage: string;
  source: {
    name: string;
  };
}

interface Props {
  item: Article;
  CATS?: {
    sources: Source[];
  };
  mark: any[];
  isMarked: boolean;
  setMark: React.Dispatch<React.SetStateAction<any[]>>;
}
const getCategory = (sources: Source[], itemSourceName: string): string => {
  const len = itemSourceName.length;
  const foundSource = sources.find(
    (source) => source.name.slice(0, len) === itemSourceName.slice(0, len)
  );
  return foundSource?.category || "other";
};



const NewsCard: React.FC<Props> = ({ item, CATS, mark, isMarked, setMark }) => {


  return (
    <article key={item.title} className="anim-pop">
      <ArticleImage src={item.urlToImage} />
      <div className="relative">
        {CATS && (
          <small className="category">
            {getCategory(CATS.sources, item.source.name)}
          </small>
        )}
        <p className="description line-clamp-1">{item.title}</p>
        <small className="line-clamp-1">{item.author || "no author"}</small>
        {mark && (
          <button
            className={isMarked ? "bookmark disabled" : "bookmark"}
            onClick={() => setMark([...mark, item])}
          ></button>
        )}
      </div>
    </article>
  );
};

export default NewsCard;
