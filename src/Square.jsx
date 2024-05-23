const Square = ({ player, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center w-auto h-auto rounded-lg border-4 cursor-pointer aspect-square border-slate-500"
    >
      <span className="text-6xl font-bold text-sky-300 sm:text-8xl">
        {player}
      </span>
    </div>
  );
};
export default Square;
