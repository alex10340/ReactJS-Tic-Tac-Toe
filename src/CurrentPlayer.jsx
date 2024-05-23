const CurrentPlayer = ({ xIsNext, boardActive, tie }) => {
  function message() {
    if (tie) {
      return "It's a tie!";
    }

    if (boardActive) {
      return `Current Player:${xIsNext ? " X" : " O"}`;
    } else {
      return `Congratulations! ${xIsNext ? " O" : " X"} Wins.`;
    }
  }

  return <div className="pb-4 text-2xl font-bold text-center">{message()}</div>;
};
export default CurrentPlayer;
