import { useState, useEffect } from "react";
import Square from "./Square";
import CurrentPlayer from "./CurrentPlayer";
import WinsDisplay from "./WinsDisplay";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [boardActive, setBoardActive] = useState(true);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [tie, setTie] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    checkWin();
  }, [squares]);

  function handleClick(index) {
    const newSquares = [...squares];
    if (squares[index] == null && boardActive) {
      newSquares[index] = xIsNext ? "X" : "O";
      setSquares(newSquares);
      setXIsNext(!xIsNext);
      setMoves((m) => m + 1);
    }
  }

  function resetBoard() {
    setMoves(0);
    setSquares(Array(9).fill(null));
    setBoardActive(true);
    setTie(false);
  }

  function resetWins() {
    setXWins(0);
    setOWins(0);
  }

  function checkWin() {
    let win = 0;
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winCombos) {
      const [a, b, c] = combo;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        win = 1;
        console.log(`${squares[a]} WINS`);

        if (squares[a] == "X") {
          setXWins((x) => x + 1);
        }
        if (squares[a] == "O") {
          setOWins((o) => o + 1);
        }

        setBoardActive(false);
        break;
      }
    }

    if (moves == 9 && win == 0) {
      setTie(true);
      setBoardActive(false);
      console.log("tie");
    }
  }

  return (
    <div className="p-8 m-auto max-w-lg">
      <CurrentPlayer tie={tie} boardActive={boardActive} xIsNext={xIsNext} />
      <WinsDisplay xWins={xWins} oWins={oWins} />

      <div className="grid grid-cols-3 gap-2 m:gap-4 aspect-square">
        {squares.map((player, index) => (
          <Square
            key={index}
            player={player}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button
        onClick={resetBoard}
        className="block px-10 py-3 mx-auto mt-8 mb-2 text-3xl text-center bg-sky-300 rounded-full drop-shadow-lg transition hover:bg-sky-400 duration-250"
      >
        Reset
      </button>
      <button
        onClick={resetWins}
        className="block px-2 py-1 mx-auto text-sm underline-offset-2 hover:underline hover:text-red-600"
      >
        Reset Wins
      </button>
    </div>
  );
};
export default Game;
