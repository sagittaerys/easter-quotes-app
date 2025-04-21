// Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="listed-btn">
        <Link to="/zilla"><button className="name-btn">Zillamane</button></Link>
        <Link to="/brownie"><button className="name-btn">Brownie</button></Link>
        <Link to="/zeke"><button className="name-btn">Ezekiel</button></Link>
        <Link to="/chavon"><button className="name-btn">El Salvador</button></Link>
        <Link to="/imran"><button className="name-btn">Imran</button></Link>
      </div>
    </div>
  );
}

export default Home;
