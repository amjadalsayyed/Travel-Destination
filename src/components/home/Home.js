import "./home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Tours />
      <Footer />
    </div>
  );
}
