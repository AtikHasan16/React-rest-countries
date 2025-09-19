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
    // console.log(countCountries);
  };
  return (
    <>
      <h1 className="text-center">Countries</h1>
      <div className="grid grid-cols-3 gap-10">
        <ol
          key={visitCount}
          className="font-semibold border-2 rounded-2xl m-4 p-4 pl-8 h-fit list-decimal"
        >
          <h2 className="text-center text-xl font-bold ">
            Visited Country : {visitCount.length}
          </h2>
          {visitCount.map((country) => (
            <li key={country.ccn3.ccn3} className="">
              {country.name.common}
            </li>
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
