import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries";

function App() {
  const CountriesPromise = async () => {
    try {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/all"
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const CountriesPromiseData = CountriesPromise();

  return (
    <>
      <Suspense fallback={<h1>Countries are loading....</h1>}>
        <Countries CountriesPromiseData={CountriesPromiseData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
