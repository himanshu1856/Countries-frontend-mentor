import CountryCard from "./CountryCard";
import countriesData from "../countriesData";

const CountriesList = ({query}) => {
  return <div className="countries-container">{
    countriesData.filter((country)=>{
      return country.name.common.toLowerCase().includes(query.toLowerCase())
    })
    .map((country)=>{
      return <CountryCard key={country.name.common} country={country}  />
    })
  }</div>;
};

export default CountriesList;
