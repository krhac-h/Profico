export interface listCategoryTypes {
  ico: string;
  text: string;
  slug: string;
}

const CAT = import.meta.env.VITE_CAT_SLUG;

import homeIco from "./assets/Icons/Navigation/Icons.svg";
import generalIco from "./assets/Icons/Navigation/Home-0.svg";
import buisnessIco from "./assets/Icons/Navigation/Home-2.svg";
import healthIco from "./assets/Icons/Navigation/Home-3.svg";
import scienceIco from "./assets/Icons/Navigation/Home-4.svg";
import sportsIco from "./assets/Icons/Navigation/Home-5.svg";
import technologyIco from "./assets/Icons/Navigation/Home-6.svg";
import bookmarkIco from "./assets/Icons/Navigation/bookmark-fill.svg";

export const listCategory: listCategoryTypes[] = [
  { ico: homeIco, text: "Home", slug: "/" },
  { ico: generalIco, text: "General", slug: `/${CAT}/general` },
  { ico: buisnessIco, text: "Business", slug: `/${CAT}/business` },
  { ico: healthIco, text: "Health", slug: `/${CAT}/health` },
  { ico: scienceIco, text: "Science", slug: `/${CAT}/science` },
  { ico: sportsIco, text: "Sports", slug: `/${CAT}/sports` },
  { ico: technologyIco, text: "Technology", slug: `/${CAT}/technology` },
  { ico: bookmarkIco, text: "Favorites", slug: "/favorites/" },
];
