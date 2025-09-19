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
      <h1 className="text-center">Countries</h1>
      <div className="grid grid-cols-3">
        <ol className="border-2 border-amber-600 rounded-2xl w-fit p-10 list-decimal">
          <h2 className="text-center text-xl font-bold underline underline-offset-8 mb-4">
            Visited Country : {visitCount.length}
          </h2>
          {visitCount.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </ol>
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
