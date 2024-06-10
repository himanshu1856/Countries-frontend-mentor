import CountryCard from "./CountryCard";
import countriesData from "../countriesData";

const CountriesList = () => {
  const array = countriesData.map((country) => <CountryCard key={country.name.common} country={country} />);
  return <div className="countries-container">{array}</div>;
};

export default CountriesList;
