import "./App.css";
import ServicesGrid from "./components/ServicesGrid";
import SpecialOffers from "./components/SpecialOffers";

function App() {
  return (
    <fragment className="flex flex-col h-screen mx-6">
      <header className="flex justify-between  my-3 items-center shadow-2xs p-1">
        <div>
          <p>Welcome Back</p>
          <h1 className="font-bold">Siswanto</h1>
        </div>
        <p className="flex items-center">🔕</p>
      </header>

      <div className="bg-blue-500 shadow-2xl rounded-2xl p-4 text-white flex flex-col items-center gap-2">
        <h2 className="font-bold text-lg">Your Balance</h2>
        <p className="text-4xl">$5,000.00</p>
        <div className="flex justify-around px-3 w-full my-3">
          <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 mr-4 w-full rounded">
            Top Up
          </button>
          <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 w-full rounded">
            Transfer
          </button>
        </div>
      </div>
      <ServicesGrid />
      <SpecialOffers />
    </fragment>
  );
}

export default App;
