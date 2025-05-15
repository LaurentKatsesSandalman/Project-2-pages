import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListOfItems from "./components/ListOfItems.tsx";
import ListOfFavoriteItems from "./components/ListOfFavoriteItems.tsx";
import About from "./components/About.tsx";
import DetailedItem from "./components/DetailedItem.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/search",
        element: <ListOfItems />,
      },
      {
        path: "/details/:location_id",
        element: <DetailedItem />,
      },
      {
    path: "/favorite",
          element: <ListOfFavoriteItems />,
        },
      ],
    },
  ],
  {
    basename: "/Project-2-pages", // 👈 Ajoute ceci
  }
);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
