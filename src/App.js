import './App.css';
import Header from "./components/Header/Header";
import Infobar from "./components/Infobar/Infobar.js";
import Advantages from "./components/Advantages/Advantages";
function App() {
  return (
    <div className="Container">
        <Header/>
        <Infobar/>
        <Advantages/>
    </div>
  );
}

export default App;
