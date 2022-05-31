import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./pages/Homescreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;
