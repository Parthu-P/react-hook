import React, { useReducer } from "react";

let initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "join":
      return { count: state.count + 1 };
    case "exist":
      return { count: state.count - 1 };
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function JoinClick(){
    dispatch({type:"join"})
  }

  function ExistClick(){
    dispatch({type:"exist"})
  }
  return (
    <div className="container-fluid">
      <div>
        <button  onClick={JoinClick} className="btn btn-success">Join</button>
        <button onClick={ExistClick} className="btn btn-danger m-2">Exist</button>
      </div>
      <h2>Live Broadcast</h2>
      <iframe
        width="400"
        height="200"
        src="https://www.youtube.com/embed/E9PaATykAYA&list=PLjbsz2-_5NgxDzFhwDQJB6WLHjwLzwTUR&index=56"
      ></iframe>
      <div>Live Viewers :{state.count}</div>
    </div>
  );
}

export default ReducerDemo;
