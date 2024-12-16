  import 'bootstrap/dist/css/bootstrap.min.css';
//rrd
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//layouts
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import Monitoring from "./pages/Monitoring";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home />, },
     
        {
          path: "monitoring",
          element: <Monitoring />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
