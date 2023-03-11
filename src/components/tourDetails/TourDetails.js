import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import data from "../../data/db.json";
import "./tourDetails.css";
import DetailContainer from "./detailContianer/DetailContainer";

export default function TourDetails() {
  const { id } = useParams();
  const { name, info, image, price } = data.find((e) => e.id === id);

  return (
    <div className="details">
      <Header />
      <DetailContainer
        name={name}
        info={info}
        image={image}
        price={price}
      ></DetailContainer>
      <Footer />
    </div>
  );
}
