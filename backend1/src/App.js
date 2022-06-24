import "./App.css";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router></Router>
      <ToastContainer />
    </>
  );
}

export default App;
