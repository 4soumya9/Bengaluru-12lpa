import "./App.css";
import DebounceLocal from "./LocalCompare/DebounceLocal";
import De from "./Normal/De";
import Debounce from "./ServerSideDebounce/Debounce";
import Words from "./WordCounter/Words";

function App() {
  return (
    <div>
      {/* <h1>Debounceee</h1> */}
      {/* <De /> */}
      {/* <DebounceLocal /> */}
      <Words />
    </div>
  );
}

export default App;
