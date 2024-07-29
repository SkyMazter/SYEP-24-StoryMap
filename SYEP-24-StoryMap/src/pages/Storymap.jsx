import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Storymap = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <h1 className="justify-content-center d-flex">
        Transit and it's... quirks
      </h1>
      <br></br>
      <p className="justify-content-center d-flex">
        text to fill space for now, I swear I'll put actual information here,
        just let me finish formatting the stuffs first plz{" "}
      </p>
      <Footer />
    </div>
  );
};

export default Storymap;
