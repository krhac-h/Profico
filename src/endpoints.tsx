export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Response {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Props {
  category: string;
  pageParam?: number;
  KEY?: string;
  q?: string;
  countryCode?: string;
  pageSize?: number;
}

interface CategoryProps extends Props {
  category: string;
}

// const API = import.meta.env.VITE_API_KEY
const API = import.meta.env.VITE_API_ALT;
const PAGINATE = import.meta.env.VITE_PAGINATE;
const COUNTRY = import.meta.env.VITE_COUNTRY;

export const fetchSources = async ({
  KEY = API,
  countryCode = COUNTRY,
}): Promise<{ sources: Source[] }> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?country=${countryCode}`,
    {
      headers: {
        "X-Api-Key": KEY,
      },
    }
  );
  return res.json();
};

export const fetchNews = async ({
  pageParam = 1,
  KEY = API,
  countryCode = COUNTRY,
  pageSize = PAGINATE,
  q = "us"
}): Promise<Props> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${countryCode}${q ? `&q=${q}` : ""}&pageSize=${pageSize}&page=${pageParam}`,
    {
      headers: {
        "X-Api-Key": KEY,
      },
    }
  );
  return res.json();
};

export const fetchLatestNews = async ({
  KEY = API,
  countryCode = COUNTRY,
}): Promise<Response> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${countryCode}`,
    {
      headers: {
        "X-Api-Key": KEY,
      },
    }
  );
  return res.json();
};

// CATS //
export const fetchCategory = async ({
  category,
  pageParam = 1,
  KEY = API,
  countryCode = COUNTRY,
  pageSize = PAGINATE,
  q

}: CategoryProps): Promise<Props> => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}${q ? `&q=${q}` : ""}&pageSize=${pageSize}&page=${pageParam}`,
    {
      headers: {
        "X-Api-Key": KEY,
      },
    }
  );
  return res.json();
};
