import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IndexPage } from "~/pages";

const routes = createBrowserRouter([
  { path: "/", element: <IndexPage /> },
  { path: "*", element: <h1>Page not found</h1> },
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;
