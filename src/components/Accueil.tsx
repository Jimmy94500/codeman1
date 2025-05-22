function EcranAccueil() {
    const characters = [
        { name: "CODE-MAN", img: "/assets/CODEMAN.png" },
        { name: "BUGCELL", img: "/assets/cell.png" },
        { name: "BUGZZER", img: "/assets/freezer.png" },
    ];

    return (
        <main>

            <div>
                <h1>CODEMAN</h1>
                <p>MANGE DU CODE, VITE !</p>
            </div>

            <ul className="mt-10 space-y-4 text-lg font-mono">
                <li className="text-green-400">► COMMENCER LA PARTIE</li>
                <li>PARAMÈTRES</li>
                <li>CLASSEMENT</li>
                <li>QUITTER</li>
            </ul>

            <div className="flex justify-center gap-12 mt-16">
                {characters.map((char) => (
                    <div key={char.name} className="text-center">
                        <img
                            src={char.img}
                            alt={char.name}
                            className="w-24 h-24 mx-auto rounded border border-gray-600"
                        />
                        <span className="block mt-2 font-mono">{char.name}</span>
                    </div>
                ))}
            </div>
        </main>

    );
}

export default EcranAccueil;