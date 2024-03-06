import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/Header";
import TestGetMultipulValue from "./component/TestComponent/TestGetMultipulValue";

function App() {
  const [open, setOpen] = useState("old");
  const [myDetails, setMyDetails] = useState({
    name: "",
    age: "",
    address: "",
  });
  return (
    <div className="App">
      <Header></Header>
      {/* <Blogs></Blogs> */}

      {/* ======================= */}

      <button onClick={() => setOpen("old")}>Old contant</button>
      <button onClick={() => setOpen("new")}>New contant</button>

      {open === "old" ? (
        <div>
          <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
            Test Old contant
          </h2>
        </div>
      ) : open === "new" ? (
        <div>
          <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
            Test New contant
          </h2>
          <TestGetMultipulValue
            myDetails={myDetails}
            setMyDetails={setMyDetails}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
