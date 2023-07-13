import React from "react";
import ReactDOM from "react-dom";
import DraggableList from "react-draggable-list";
import "./App.css";

function App() {
  const myList = [
    { id: 1 ,name: "one", color: "green" },
    { id: 2 ,name: "two", color: "blue" },
    { id: 3 ,name: "three", color: "red" },
    { id: 4 ,name: "four", color: "lightgreen" },
    { id: 5 ,name: "five", color: "lightblue" },
    { id: 6 ,name: "six", color: "cyan" },
  ];
  const handleClick = () => {
    console.log("mylist: ", myList);
  };

  return (
    <>
      <div className="App">
        <div style={{ width: 300, margin: "0 auto" }}>
          <DraggableList width={100} height={100} itemKey="id">
            {myList.map((item, i) => (
              <div key={item.id} style={{ width: 100, height: 100, background: item.color }}>
                {item.name}
              </div>
            ))}
          </DraggableList>
          <button onClick={handleClick}>get order</button>
        </div>
      </div>
    </>
  );
}

export default App;
