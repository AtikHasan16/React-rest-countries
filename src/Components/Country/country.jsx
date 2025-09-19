import React, { useState } from "react";

const Country = ({ country, index, countVisit }) => {
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    visited ? setVisited(false) : setVisited(true);
    visited ? 0 : countVisit(country);
  };

  return (
    <div
      className={`font-semibold border-2 rounded-2xl  p-4 h-full ${
        visited ? "text-cyan-400" : "text-white"
      }`}
    >
      <img className="rounded-2xl my-6" src={country.flags.flags.png} alt="" />
      <p>Serial No: {index + 1}</p>
      <h2>Name: {country.name.common}</h2>
      <h3>Region: {country.region.region}</h3>
      <p>Population: {country.population.population}</p>
      <p className="pb-4">Language: {country.languages.languages.eng}</p>
      <button onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}{" "}
      </button>
    </div>
  );
};

export default Country;

/**
 * {
"name": {
"common": "Jamaica",
"official": "Jamaica"
},
"ccn3": {
"ccn3": "388"
},
"currencies": {
"currencies": {
"JMD": {
"name": "Jamaican dollar",
"symbol": "$"
}
}
},
"capital": {
"capital": [
"Kingston"
]
},
"region": {
"region": "Americas"
},
"languages": {
"languages": {
"eng": "English",
"jam": "Jamaican Patois"
}
},
"area": {
"area": 10991
},
"cca3": {
"cca3": "JAM"
},
"population": {
"population": 2961161
},
"continents": {
"continents": [
"North America"
]
},
"flags": {
"flags": {
"png": "https://flagcdn.com/w320/jm.png",
"svg": "https://flagcdn.com/jm.svg",
"alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
}
}
},
 */
