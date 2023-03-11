import "./header.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <div className="header">
      <h1>TRAVEL DESTINATION</h1>
      <Link to="/">
        <Button variant="outline-info">Home</Button>
      </Link>
    </div>
  );
}
