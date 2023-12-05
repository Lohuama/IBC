import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Ministerios from "./components/Ministerios/Ministerios";
import "./App.css";
import NossaHistoria from "./components/NossaHistoria/NossaHistoria";
import Momentos from "./components/Momentos/Momentos";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Endereco from "./components/Endereco/Endereco";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <NossaHistoria />
      {/* <Experience /> */}
      <Ministerios />
      <QuemSomos />
      <Momentos />
      <Endereco />
      <Footer />
    </div>
  );
}

export default App;
