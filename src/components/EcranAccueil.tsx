import "./EcranAccueil.css"



function EcranAccueil() {
    const characters = [
        { name: "CODE-MAN", img: "src/assets/images/codeman.jpg" },
        { name: "BUGCELL", img: "src/assets/images/cell.jpg" },
        { name: "BUGZZER", img: "src/assets/images/freezer.jpg" },
        { name: "BOOBUG", img: "src/assets/images/majin.jpg" },
    ];

    return (
        <section className="fond">

            <div className="title">
                <h1>CODEMAN</h1>
                <p>MANGE DU CODE, VITE !</p>
            </div>

            <ul className="mainMenu">
                <li className="start">► COMMENCER LA PARTIE</li>
                <li>PARAMÈTRES</li>
                <li>CLASSEMENT</li>
                <li>QUITTER</li>
            </ul>

            <div className="characters">
                {characters.map((char) => (
                    <div key={char.name} className="character">
                        <img
                            src={char.img}
                            alt={char.name}

                        />

                    </div>
                ))}
            </div>
        </section>

    );
}

export default EcranAccueil;