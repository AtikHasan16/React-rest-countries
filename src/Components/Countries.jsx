import React, { use } from "react";
import Country from "./Country/country";
const Countries = ({ CountriesPromiseData }) => {
  const CountriesData = use(CountriesPromiseData);
  const countries = CountriesData.countries;
  console.log(countries);

  return (
    <div>
      {countries.map((country, index) => (
        <Country index={index} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
