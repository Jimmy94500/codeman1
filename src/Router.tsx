import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Regles from "./assets/pages/Regles";
import Grille from "./components/Grille";
import EcranAccueil from "./components/EcranAccueil";

const Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <EcranAccueil />,
      },
      {
        path: "/Regles",
        element: <Regles />,
      },
      {
        path: "/Jeux",
        element: <Grille />,
      },
    ],
  },
]);

export default Router;
