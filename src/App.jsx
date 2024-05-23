import Game from "./Game";
import reactLogo from "./assets/reactLogo.png";

const App = () => {
  return (
    <div className="bg-slate-200 h-screen">
      <header className="justify-center flex items-center space-x-2 bg-slate-100 text-3xl text-center shadow-md p-4">
        <img
          className="animate-spin-slow h-6"
          src={reactLogo}
          alt="react logo"
        />
        <span className="text-sky-300 font-bold pr-2">ReactJS</span>TicTacToe
      </header>

      <Game />
    </div>
  );
};
export default App;
