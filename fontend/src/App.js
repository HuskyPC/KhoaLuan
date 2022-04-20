// import ContextComponent from "./component/context.js/ContextComponent";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./component/context/ContextComponent";
import Routers from "./component/router/Router";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routers />

        <ToastContainer position="bottom-right" newestOnTop />
      </ContextProvider>
    </div>
  );
}

export default App;
