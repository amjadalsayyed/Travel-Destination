import "./tours.css";
import data from "../../data/db.json";
import Tour from "./tour/Tour";

export default function Tours() {
  return (
    <div className="tours">
      {data.map((city) => {
        return <Tour key={city.id} city={city} />;
      })}
    </div>
  );
}
