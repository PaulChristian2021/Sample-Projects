import Nav from "./Nav/Nav";
import Filters from "./Filters/Filters";
import CountriesBox from "./CountriesBox/CountriesBox";
import Search from "./Search/Search";
import Loading from './ux/Loading'
import Error from "./ux/Error";
import SelectACountry from './ux/SelectACountry'
import "./App.css";

// import { Provider } from "react-redux";
// import store from './store/index'
import { useEffect, useState } from "react";
// import {Route} from 'react-router-dom';
import CountryDetail from "./CountryDetail/CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [dark, setDark] = useState('');
  const [activeRegion, setActiveRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        setLoading(true);
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((response) => {
        setCountries(response);
        setfilteredCountries(response);
      })
      .catch((error) => {
        setError(error.statusText);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={`firstDiv ${dark ? 'darkBody':''}`}>
      <Nav darkMode={dark} toggleTheme={toggleTheme} />
      <Filters darkMode={dark} filterByRegion={filterByRegion} activeRegion={activeRegion} />
      {loading && !error && <Loading />}
      {error && !loading && <Error error={error}/>}
      {!loading && !error && <CountriesBox
        filteredCountries={filteredCountries}
        selectCountry={selectCountry}
      />}
      <Search darkMode={dark} searchFilteredCountries={searchFilteredCountries} />
      {selectedCountry && (
        <CountryDetail
          darkMode={dark} 
          selectedCountry={selectedCountry}
          selectCountry={selectCountry}
        />
      )}
      {!selectedCountry && <SelectACountry />}
    </div>
  );

  function selectCountry(cty, isABorder) {
    if (isABorder) {
      const country = countries.filter((c) => {
        return c.cca3 === cty;
      });

      const [ctry] = country;

      setSelectedCountry(ctry);
      return;
    } else {
      setSelectedCountry(cty);
    }
  }

  function searchFilteredCountries(query) {
    if (query.trim().length < 1) {
      setfilteredCountries(countries);
    }
    setfilteredCountries(countries);
    setfilteredCountries(
      countries.filter((cty) =>
        cty.name.common.toLowerCase().includes(query.trim().toLowerCase())
      )
    );
    setActiveRegion("");
  }

  function filterByRegion(reg) {
    if (reg !== "") {
      setfilteredCountries(
        countries.filter(
          (cty) => cty.region.toLowerCase() === reg.toLowerCase()
        )
      );
      setActiveRegion(reg.toLowerCase());
    } else {
      setfilteredCountries(countries);
      setActiveRegion("");
    }
  }

  function toggleTheme() {
    dark === 'darkMode' ? setDark('') : setDark('darkMode');
  }
}

export default App;
