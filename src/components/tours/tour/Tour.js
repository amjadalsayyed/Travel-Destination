import { Link } from "react-router-dom";
import "./tour.css";

function Tour({ city }) {
  return (
    <Link to={`/city/${city.id}`} className="tourCard">
      <h4>{city.name}</h4>
      <img src={city.image} alt={city.name} />
    </Link>
  );
}

export default Tour;
