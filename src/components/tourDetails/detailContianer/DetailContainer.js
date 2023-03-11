import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./DetailContainer.css";

export default function DetailContainer({ info, name, price, image }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="tourDetail">
      <div className="tourtext">
        <h2>{name}</h2>
        <div className="pa">
          <p>{showMore ? info : `${info.substring(0, 200)}...`}</p>
          <Button variant="outline-info" onClick={() => setShowMore(!showMore)}>
            {showMore ? "See Less" : "See More"}
          </Button>
        </div>
        <h4>Price : {price}$</h4>
      </div>
      <img src={image} />
    </div>
  );
}
