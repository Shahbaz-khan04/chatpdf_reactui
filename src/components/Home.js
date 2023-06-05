import "../App.css";
import Header from "./Header/Header";
import Cards from "./CardComponent/Cards";
import InputFeild from "./InputComponent/InputFeild";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div className="App font-custom">
      <Header />
      <InputFeild />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
