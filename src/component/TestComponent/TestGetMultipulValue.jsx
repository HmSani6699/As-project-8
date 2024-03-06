import React from "react";

const TestGetMultipulValue = ({ myDetails, setMyDetails }) => {
  console.log(myDetails);

  return (
    <div>
      <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
        Added new contant
      </h2>
      <input
        onChange={(e) => setMyDetails({ ...myDetails, name: e.target.value })}
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        onChange={(e) => setMyDetails({ ...myDetails, age: e.target.value })}
        type="text"
        placeholder="Age"
      />
      <br />
      <input
        onChange={(e) =>
          setMyDetails({ ...myDetails, address: e.target.value })
        }
        type="text"
        placeholder="Address"
      />
    </div>
  );
};

export default TestGetMultipulValue;
