import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchDetails from "./components/SearchDetails";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SearchDetails />
        <h1>GitHub User Search App</h1>
      </div>
    </>
  );
}

export default App;
