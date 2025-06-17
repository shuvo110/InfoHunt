import { Outlet } from "react-router-dom";
import "./App.css";
import NavBer from "./components/shared/NavBer";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <NavBer></NavBer>
      <Outlet></Outlet>
      <Footer/>
    </>
  );
}

export default App;
