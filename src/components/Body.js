import Browse from "./Browse";
import Login from "./Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
