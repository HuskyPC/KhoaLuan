// import ContextComponent from "./component/context.js/ContextComponent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStoreContext } from "./component/context";
import Routers from "./component/router/Router";

function App() {
  const [cart, setCart] = useStoreContext();
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ cart", cart);
  return (
    <div className="App">
      <Routers />
      <ToastContainer position="bottom-right" newestOnTop />
    </div>
  );
}

export default App;
