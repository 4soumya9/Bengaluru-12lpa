import { useReducer } from "react";

//using reduccer
function reducerr(state, action) {
  if (action.type === "incre") {
    return { count: state.count + 1 };
  }
  if (action.type === "decre") {
    return { count: state.count - 1 };
  }
  if (action.type === "reset") {
    return { count: 0 };
  }
  return state;
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducerr, { count: 0 });
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "incre" })}>Add</button>
      <button onClick={() => dispatch({ type: "decre" })}>Decre</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset </button>
    </div>
  );
};

export default Counter;
