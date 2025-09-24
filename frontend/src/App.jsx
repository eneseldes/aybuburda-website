import "./App.scss";
import ByWhat from "./components/ByWhat/ByWhat";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import How from "./components/How/How";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import WhyPurpose from "./components/WhyPurpose/WhyPurpose";

function App() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <WhyPurpose />
      <Categories />
      <How />
      <ByWhat />
      <Footer />
    </main>
  );
}

export default App;
