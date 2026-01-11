import "./App.css";
import DebounceLocal from "./LocalCompare/DebounceLocal";
import De from "./Normal/De";
import Debounce from "./ServerSideDebounce/Debounce";

function App() {
  return (
    <div>
      {/* <h1>Debounceee</h1> */}
      {/* <De /> */}
      <DebounceLocal />
    </div>
  );
}

export default App;
