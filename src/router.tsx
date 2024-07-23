import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BookmarkProvider } from "./components/BookmarkContext";

const CAT = import.meta.env.VITE_CAT_SLUG;


import Homepage from "./pages/Homepage";
const Category = lazy(() => import("./pages/Category"));
const Favorites = lazy(() => import("./pages/Favorites"));
const ErrorPage = lazy(() => import("./pages/error-page"));
import SimpleLoading from "./components/SimpleLoading";

////////////////////////////////////////////////////
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/${CAT}/:category`,
    element: <Category />,
    errorElement: <ErrorPage />,
  },
]);

////////////////////////////////////////////////////

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookmarkProvider>

      <QueryClientProvider client={queryClient}>
        <Suspense fallback={SimpleLoading}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      </QueryClientProvider>
    </BookmarkProvider>
  </React.StrictMode>
);
