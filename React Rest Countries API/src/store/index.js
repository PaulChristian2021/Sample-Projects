import { createStore } from "redux";

const countries = fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  })
  .then((response) => console.log(response))
  .catch((err) => {
    console.error("Error: ", err);
  })
  .finally();

const initState = {
  darkMode: false,
  countries,
  filteredCountries: [],
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      console.log(state);
      return { ...state, darkMode: !state.darkMode };
    case "filterCountries":
      console.log(state);
      return {
        ...state,
        filteredCountries: state.filteredCountries.filter(
          (c) => c === action.query
        ),
      };
    default:
      console.log(state);
      return state;
  }
};

const store = createStore(mainReducer, initState);

export default store;
