import { ToastContainer } from "react-toastify";
import "./App.css";
import ScrollButton from "./Components/Button/ScrollButton";
import LandingPage from "./Pages/LandingPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App max-w-[1400px] mx-auto">
      <LandingPage />
      <ScrollButton />
      <ToastContainer />
    </div>
  );
}

export default App;
