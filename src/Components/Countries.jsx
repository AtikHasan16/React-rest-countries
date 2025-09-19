import React, { use, useState } from "react";
import Country from "./Country/country";
const Countries = ({ CountriesPromiseData }) => {
  const CountriesData = use(CountriesPromiseData);
  const countries = CountriesData.countries;
  //   console.log(countries);

  const [visitCount, setVisitCount] = useState([]);
  const countVisit = (country) => {
    const countCountries = [...visitCount, country];
    setVisitCount(countCountries);
    console.log(countCountries);

    console.log(country);
  };
  return (
    <>
      <h2 className="text-center text-2xl font-bold">
        Visited Country : {visitCount.length}
      </h2>
      <ol className="border-2 border-amber-600 rounded-2xl w-fit p-10 list-decimal">
        <h2 className="font-bold underline underline-offset-6 mb-2">
          Country Visited
        </h2>
        {visitCount.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="grid grid-cols-3">
        {countries.map((country, index) => (
          <Country
            key={country.ccn3.ccn3}
            index={index}
            country={country}
            countVisit={countVisit}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
