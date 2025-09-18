import React, { use } from "react";
import Country from "./Country/country";
const Countries = ({ CountriesPromiseData }) => {
  const CountriesData = use(CountriesPromiseData);
  const countries = CountriesData.countries;
  //   console.log(countries);

  return (
    <div className="grid grid-cols-3">
      {countries.map((country, index) => (
        <Country
          key={country.ccn3.ccn3}
          index={index}
          country={country}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
