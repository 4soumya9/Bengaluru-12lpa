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
const D = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);

  const [countryInput, setCountryInput] = useState("");
  const [stateInput, setStateInput] = useState("");

  const [openCountry, setOpenCountry] = useState(false);
  const [openState, setOpenState] = useState(false);

  

  return <div>D</div>;
};

export default D;
