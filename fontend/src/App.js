// import ContextComponent from "./component/context.js/ContextComponent";

import { ContextProvider } from "./component/context/ContextComponent";
import Routers from "./component/router/Router";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routers />
      </ContextProvider>
    </div>
  );
}

export default App;
