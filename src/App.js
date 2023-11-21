import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="weatherCard">
          <WeatherCard />
        </div>
      </header>
    </div>
  );
}

export default App;
