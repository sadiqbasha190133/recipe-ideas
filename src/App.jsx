import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="bg-green-600 text-white p-4 text-center text-2xl font-bold shadow-lg">
        🍲 Recipe Ideas
      </header>
      <Home />
    </div>
  );
}

export default App;
