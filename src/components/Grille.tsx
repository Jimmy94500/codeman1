import { useState, useEffect } from "react";
import Codeman from "./Codeman";
import "./Grille.css";
import Badbugs from "./Badbugs";
import BadbugsDeux from "./BadbugsDeux";
import QuestionUne from "./Questions/QuestionUne";
import Emoji from "./Emoji";

function Grille() {
	const grid = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	];
	// CODEMAN
	const [playerColumn, setPlayerColumn] = useState(4);
	const [playerRow, setPlayerRow] = useState(4);
	//LE  BADBUGS 2
	const [badbugsDeuxColumn, setBadbugsDeuxColumn] = useState(2);
	const [badbugsDeuxRow, setBadbugsDeuxRow] = useState(1);

	// MOUVEMENT DE CODEMAN
	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		let newRow = playerRow;
		let newCol = playerColumn;

		if (e.key === "ArrowUp") newRow = Math.max(0, playerRow - 1);
		if (e.key === "ArrowDown") newRow = Math.min(9, playerRow + 1);
		if (e.key === "ArrowLeft") newCol = Math.max(0, playerColumn - 1);
		if (e.key === "ArrowRight") newCol = Math.min(9, playerColumn + 1);

		// Ajout de la position actuelle à l’historique
		setHistory((prev) => [...prev, { row: newRow, column: newCol }]);

		setPlayerRow(newRow);
		setPlayerColumn(newCol);
	};

	// MOUVEMENT AUTONOME DES BADBUGS
	const [history, setHistory] = useState<{ row: number; column: number }[]>([]);

	// LE PREMIER BADBUGS
	const delayedPosition =
		history.length >= 5 ? history[history.length - 5] : { row: 8, column: 8 };

	// Déplacement aléatoire de BadbugsDeux
	useEffect(() => {
		const interval = setInterval(() => {
			const directions = ["up", "down", "left", "right"];
			const randomDirection =
				directions[Math.floor(Math.random() * directions.length)];

			setBadbugsDeuxRow((prevRow) => {
				if (randomDirection === "up") return Math.max(0, prevRow - 1);
				if (randomDirection === "down") return Math.min(9, prevRow + 1);
				return prevRow;
			});

			setBadbugsDeuxColumn((prevCol) => {
				if (randomDirection === "left") return Math.max(0, prevCol - 1);
				if (randomDirection === "right") return Math.min(9, prevCol + 1);
				return prevCol;
			});
		}, 500); // toutes les 500ms
		return () => clearInterval(interval); // nettoyage à la suppression du composant
	}, []);

	// QUESTION 1

	const [pastequeColumn, setPastequeColumn] = useState(4);
	const [pastequeRow, setPastequeRow] = useState(7);
	const [citronColumn, setCitronColumn] = useState(7);
	const [citronRow, setCitronRow] = useState(5);
	const [kiwiColumn, setKiwiColumn] = useState(2);
	const [kiwiRow, setKiwiRow] = useState(3);
	const [raisinColumn, setRaisinColumn] = useState(1);
	const [raisinRow, setRaisinRow] = useState(8);

    

	return (
		<>
			<div>
				<QuestionUne />
			</div>
			<div className="Reponse">
				{playerRow === pastequeRow && playerColumn === pastequeColumn && (
					<p className="message-bonne">✅ Bonne réponse !</p>
				)}
				{
					(playerRow === kiwiRow && playerColumn === kiwiColumn) && (
						<p className="message-bonne"> FAUX !</p>
					)}
                    {(playerRow === citronRow && playerColumn === citronColumn) && (
						<p className="message-bonne"> FAUX !</p>
					)}
					{(playerRow === raisinRow && playerColumn === raisinColumn) && (
						<p className="message-bonne"> FAUX !</p>
					)}
			</div>
			<div
				tabIndex={0} // rend le div focusable
				onKeyDown={handleKeyDown}
				className="grille"
				style={{ outline: "none" }} // enlève le contour bleu
			>
				<div className="grill">
					{grid.map((row, rowIndex) => (
						<div className="row" key={rowIndex}>
							{row.map((column, columnIndex) => (
								<div className="column" key={columnIndex}>
									{/* LES CONDITIONS QUI PLACENT LES ELEMENTS SUR LE PLATEAU */}
									{rowIndex === playerRow && columnIndex === playerColumn && (
										<Codeman />
									)}
									{rowIndex === delayedPosition.row &&
										columnIndex === delayedPosition.column && <Badbugs />}
									{rowIndex === badbugsDeuxRow &&
										columnIndex === badbugsDeuxColumn && <BadbugsDeux />}
									{rowIndex === pastequeRow &&
										columnIndex === pastequeColumn && <Emoji icon={"🍉"} />}
									{rowIndex === citronRow && columnIndex === citronColumn && (
										<Emoji icon={"🍋"} />
									)}
									{rowIndex === raisinRow && columnIndex === raisinColumn && (
										<Emoji icon={"🍇"} />
									)}
									{rowIndex === kiwiRow && columnIndex === kiwiColumn && (
										<Emoji icon={"🥝"} />
									)}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Grille;
