const WinsDisplay = ({ xWins, oWins }) => {
  return (
    <div className="text-xl text-center pb-8">{`Wins: X:${xWins}, O:${oWins}`}</div>
  );
};
export default WinsDisplay;
