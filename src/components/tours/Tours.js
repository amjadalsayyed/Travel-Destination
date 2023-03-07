import "./tours.css";
import data from "../../data/db.json";

export default function Tours() {
  return (
    <div className="tours">
      {data.map((city) => {
        return (
          <div key={city.id} className="tourCard">
            <h4>{city.name}</h4>
            <img src={city.image} alt={city.name} />
          </div>
        );
      })}
    </div>
  );
}
