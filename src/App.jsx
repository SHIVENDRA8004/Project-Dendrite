import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/pages/Home";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="d-flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
