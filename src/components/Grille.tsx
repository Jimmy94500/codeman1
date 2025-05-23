import { useEffect, useState } from "react";
import Badbugs from "./Badbugs";
import BadbugsDeux from "./BadbugsDeux";
import Codeman from "./Codeman";
import Emoji from "./Emoji";
import "./Grille.css";
import QuestionUne from "./Questions/QuestionUne";

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
					<p className="score"> Score : {count}</p>
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
									<div className="column" key={column}>
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
