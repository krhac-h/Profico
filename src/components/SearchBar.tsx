import { useSearchParams } from "react-router-dom";

interface Props {
  isMobile?: boolean;
}

const SearchBar: React.FC<Props> = ({ isMobile }) => {


const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchParams(prev => {
      prev.set("filter",e.target.filter.value || null)
      return prev;
    }, {replace: true})
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <form onSubmit={(e) => handleInputChange(e)}
        >
        <input
          type="search"
          name="filter"
          placeholder="Search news"
          // value={search}
          />

        {!isMobile && <input type="submit" value="SEARCH" id="SearchBtn" />}
      </form>
    </div>
  );
};

export default SearchBar;
