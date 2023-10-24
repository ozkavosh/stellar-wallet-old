import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
