import "./App.css";
import Paremntt from "./components/ChildToParent/Paremntt";
import Parenttttt from "./components/ChildToParentUsingRef/Parent";
import COunterr from "./components/CountersWithReducers/COunterr";
import P from "./components/DataFromPareantToChild/P";
import Parent from "./components/ForwardRef/Parent";
import Sample from "./components/Refs/Sample";

function App() {
  return (
    <div>
      {/* <Sample /> */}
      {/* <Parent /> */}
      {/* <Paremntt /> */}
      {/* <P /> */}
      {/* <COunterr /> */}
      <Parenttttt />
    </div>
  );
}

export default App;
