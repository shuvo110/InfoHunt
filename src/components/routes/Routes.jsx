import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Weather from "../pages/Weather/Weather";
import Recipes from "../pages/Recipes/Recipes";
import News from "../pages/News/News";
import ToDo from "../pages/Todo/ToDo";
import App from "../../App";
import Login from "../pages/login/Login";
import RoutsCardSin from "../pages/Recipes/RoutsCardSin";
import BioData from "../pages/BioData/BioData";
import BioCard from "../pages/BioData/BioCard";
import RegisterForm from "../pages/login/RegisterForm";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "Weather",
        element: (
          <PrivateRoute>
            <Weather></Weather>
          </PrivateRoute>
        ),
      },
      {
        path: "Recipes",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
      },
      { path: "News", element: <News></News> },
      {
        path: "ToDo",
        element: (
          <PrivateRoute>
            <ToDo></ToDo>
          </PrivateRoute>
        ),
      },
      { path: "BioData", element: <BioData></BioData> },
      { path: "BioCard", element: <BioCard></BioCard> },
      { path: "login", element: <Login /> },
      { path: "rege", element: <RegisterForm /> },
      { path: "routsCard/:idMeal", element: <RoutsCardSin></RoutsCardSin> },
    ],
  },
]);
export default router;
