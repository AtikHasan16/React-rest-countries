import React from "react";

const country = ({ country, index }) => {
  return (
    <div className="font-semibold text-2xl">
      <h2>
        {" "}
        {index + 1}. {country.name.common}
      </h2>
    </div>
  );
};

export default country;
