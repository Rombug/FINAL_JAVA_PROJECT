import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Content/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
