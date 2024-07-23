import { createContext, useState, useContext } from "react";

interface ContextType {
  mark: any[];
  setMark: React.Dispatch<React.SetStateAction<any[]>>;
}

interface Props<T> {
  children: T;
}

const Context = createContext<ContextType>({
  mark: [],
  setMark: () => {},
});

export const BookmarkProvider: React.FC<Props<React.ReactNode>> = ({
  children,
}) => {
  const [mark, setMark] = useState<any[]>(
    JSON.parse(window.localStorage.getItem("bookmarked_array") || "[]")
  );

  return (
    <Context.Provider value={{ mark, setMark }}>{children}</Context.Provider>
  );
};

export const useBookmarkContext = () => useContext(Context);
