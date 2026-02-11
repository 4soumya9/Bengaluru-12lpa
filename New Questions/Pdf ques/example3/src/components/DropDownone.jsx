import React, { useState } from "react";

const DropDownone = () => {
  const fruits = ["Apple", "Banana", "Orange"];
  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Canada" },
  ];

  const [selectFruit, setSelectedFruit] = useState("");
  const [selectCountry, setSelectCountry] = useState("");

  return (
    <div>
      {/* Drop down using array  */}
      <select
        value={selectFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
      >
        <option value="" disabled>
          {" "}
          Select Fruit
        </option>
        {fruits.map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
      <p>Selected Fruit : {selectFruit}</p>

      {/* // for objects  */}
      <select
        value={selectCountry}
        onChange={(e) => setSelectCountry(e.target.value)}
      >
        <option value="" disabled>
          Selected Country
        </option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <p>Selected : {selectCountry}</p>
    </div>
  );
};

export default DropDownone;
