import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Accueil from "./assets/pages/Accueil";
import Regles from "./assets/pages/Regles";
import Grille from "./components/Grille";
import EcranAccueil from "./components/Accueil";

const Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Regles />,
      },
      {
        path: "/Profil",
        element: <EcranAccueil />,
      },
      {
        path: "/Jeux",
        element: <Grille />,
      },
    ],
  },
]);

export default Router;
