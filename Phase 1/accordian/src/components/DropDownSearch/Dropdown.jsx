import React, { useState } from "react";

const country = [
  { id: 1, name: "India" },

  { id: 2, name: "United States" },

  { id: 3, name: "Canada" },

  { id: 4, name: "Australia" },

  { id: 5, name: "United Kingdom" },
];
const states = [
  { id: 101, country_id: 1, name: "Andhra Pradesh" },

  { id: 102, country_id: 1, name: "Telangana" },

  { id: 103, country_id: 1, name: "Karnataka" },

  { id: 104, country_id: 1, name: "Tamil Nadu" },

  { id: 105, country_id: 1, name: "Kerala" },

  { id: 201, country_id: 2, name: "California" },

  { id: 202, country_id: 2, name: "Texas" },

  { id: 203, country_id: 2, name: "Florida" },

  { id: 204, country_id: 2, name: "New York" },

  { id: 301, country_id: 3, name: "Ontario" },

  { id: 302, country_id: 3, name: "Quebec" },

  { id: 303, country_id: 3, name: "British Columbia" },

  { id: 401, country_id: 4, name: "New South Wales" },

  { id: 402, country_id: 4, name: "Victoria" },

  { id: 403, country_id: 4, name: "Queensland" },

  { id: 501, country_id: 5, name: "England" },

  { id: 502, country_id: 5, name: "Scotland" },

  { id: 503, country_id: 5, name: "Wales" },
];
const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filteredState, setFilteredState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [ipcountry, setIpcountry] = useState("");
  const [ipstate, setIpstate] = useState("");

  const handleCountry = (e) => {
    const countryId = Number(e.target.value);
    setSelectedCountry(countryId);
    setSelectedState("");

    const res = states.filter((s) => s.country_id === countryId);
    setFilteredState(res);
  };
  //country search
  const searchedCountries = country.filter((c) =>
    c.name.toLowerCase().includes(ipcountry.toLowerCase())
  );

  const searchedStates = filteredState.filter((s) =>
    s.name.toLowerCase().includes(ipstate.toLowerCase())
  );

  return (
    <div>
      <h2>Drop down</h2>
      {/* country search */}
      <input value={ipcountry} onChange={(e) => setIpcountry(e.target.value)} />
      <select value={selectedCountry} onChange={handleCountry}>
        <option value="">Select Countries</option>
        {searchedCountries.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={ipstate}
        onChange={(e) => setIpstate(e.target.value)}
        disabled={!selectedCountry}
      />
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value="">Select Value</option>
        {searchedStates.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
