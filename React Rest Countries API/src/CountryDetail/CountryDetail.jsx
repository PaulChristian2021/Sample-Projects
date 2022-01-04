import React from "react";
import c from "./CountryDetail.module.css";
import BorderCountry from "./BorderCountry";

const CountryDetail = (props) => {
  const cty = props.selectedCountry;
  const nativeNames = cty.name.nativeName;
  const theNativeName = nativeNames[Object.keys(nativeNames)[0]].official;
  const currencies = [];
  const curs = Object.entries(cty.currencies); //getting each currency
  curs.forEach(
    (
      cur //
    ) => currencies.push(cur[1].name)
  );
  const languages = [];
  const langs = Object.entries(cty.languages);
  langs.forEach(
    (
      langs //
    ) => languages.push(langs[1])
  );
  const borders = cty.borders;

  return (
    <section className={c.section}>
      <img
        src={cty.flags.svg}
        alt={cty.name.common + "'s flag"}
        className={c.flag}
      />
      <div className={`${props.darkMode ? 'darkBody' : ''} ${c.info}`}>
        <div>
          <h2>{cty.name.common}</h2>
          <p>Native Name: {theNativeName}</p>
          <p>Population: {cty.population.toLocaleString()}</p>
          <p>Region: {cty.region}</p>
          <p>Subregion: {cty.subregion}</p>
        </div>
        <div>
          <p>Capital: {cty.capital ? cty.capital : "N/A"}</p>
          <p>
            Top Level Domain: {cty.tld.toLocaleString().replaceAll(",", ", ")}
          </p>
          <p>Currencies: {currencies.toLocaleString().replaceAll(",", ", ")}</p>
          <p>Languages: {languages.toLocaleString().replaceAll(",", ", ")}</p>

          <div>
            <p>
              Border countries:
              {borders ? borders.map((border) => {
                return <BorderCountry darkMode={props.darkMode} selectCountry={props.selectCountry} cty={cty} text={border} key={border}/>;
              }) : ' N/A'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
