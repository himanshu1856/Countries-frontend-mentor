import CountryCard from "./CountryCard";
import countriesData from "../countriesData";

const CountriesList = ({query}) => {
  
  const ar = countriesData.filter((country)=>{
    country.name.common.includes(query)
  })

  console.log("Resultant array : ", ar);
  console.log(countriesData);


  // const array = countriesData.map((country) => <CountryCard key={country.name.common} country={country} />);
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
