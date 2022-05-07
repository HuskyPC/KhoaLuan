// import ContextComponent from "./component/context.js/ContextComponent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./component/router/Router";
import { useStoreContext } from "./component/context";

function App() {
  return (
    <div className="App">
      <Routers />
      <ToastContainer position="bottom-right" newestOnTop />
    </div>
  );
}

export default App;
