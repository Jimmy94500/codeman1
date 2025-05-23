import "./Regles.css";
import { Link } from "react-router";

function Regles() {
  return (
    <article className="regles">
      <div className="titre">
        <h1>😛 LES REGLES DE CODEMAN 😛</h1>
      </div>
      <div className="explications">
        <p>
          CODEMAN DOIT TROUVER LA BONNE REPONSE POUR ACCUMULER LE MAXIMUM DE
          POINTS.
        </p>
        <p>
          FAIT ATTENTION A CE QUE CODEMAN NE SE FASSE PAS CHOPER PAR LES BADBUGS
          SINON TU PERDERAS DES POINTS !
        </p>
        <p>BON COURAGE.</p>
      </div>
      <button className="btn glitch">
        <Link to="/Jeux">JOUER</Link>
      </button>
      <button className="btn glitch">
        <Link to="/Profil">Profil</Link>
      </button>
    </article>
  );
}

export default Regles;
