import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("")

  const queryHandler = (value) => {
    console.log(value);
    setQuery(value)
  }

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar queryHandler={queryHandler} query={query} />
          <SelectMenu />
        </div>
        <CountriesList query={query}/>
      </main>
    </>
  );
};

export default App;
