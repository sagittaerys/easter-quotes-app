import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Sage from "./sagittaerys";
import Home from "./Home";
import Brownie from "./brownie";
import Salvador from "./chavon";
import Samzilla from "./zilla";
import Ezekiel from "./zeke";
import Imran from "./imran";
import Main from "./intro-head";
import Header from "./icon-funct";

function App() {
  return (
    <Router>
      <div className="main-div">

        <Header />
        {/* <Main /> -- Global Component Here */}

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<><Main /><Home /></>} />
          <Route path="/zilla" element={<Samzilla />} />
          <Route path="/brownie" element={<Brownie />} />
          <Route path="/zeke" element={<Ezekiel />} />
          <Route path="/chavon" element={<Salvador />} />
          <Route path="/imran" element={<Imran />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;