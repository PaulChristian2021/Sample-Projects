let allCountries,
  storedCountries,
  regionFilter = "",
  countriesFilter = "",
  theme = "light",
  body = document.querySelector("body"),
  inputSearch = document.querySelector("#search-input"),
  fakeSelect = document.querySelector("#fake-select"),
  realSelect = document.querySelector("select"),
  filter = document.querySelector("#filter"),
  filterDescription = document.querySelector("#filter-desc"),
  filterOptions = document.querySelector("#labels"),
  filterOption = document.querySelectorAll("label"),
  options = document.querySelectorAll("select option"),
  countriesContainer = document.querySelector("#countries-container"),
  countryCard = document.querySelectorAll(".country-card"),
  darkModeBtn = document.querySelector("#darkmode-btn"),
  moon = document.querySelector("#moon"),
  main = document.querySelector("main"),
  countryDetailsView = document.querySelector("#country-details"),
  cBackBtn = document.querySelector("#back-button"),
  cCountryFlag = document.querySelector("#country-flag"),
  cCountryName = document.querySelector("#country-name"),
  cNativename = document.querySelector("#nativename"),
  cPopulation = document.querySelector("#population"),
  cRegion = document.querySelector("#region"),
  cSubregion = document.querySelector("#subregion"),
  cCapital = document.querySelector("#capital"),
  cDomain = document.querySelector("#domain"),
  cCurrencies = document.querySelector("#currencies"),
  cLanguages = document.querySelector("#languages"),
  borderingCountries = document.querySelectorAll(".bordering-country"),
  borderingCountriesContainer = document.querySelector(".border-countries");
async function getData() {
  if (!localStorage.getItem("storedCountries")) {
    await fetch("https://restcountries.com/v3.1/all")
      .then((a) => a.json())
      .then((a) => {
        allCountries = a;
      });
    const a = { allCountries: allCountries, theme: theme };
    localStorage.setItem("storedCountries", JSON.stringify(a));
  } else {
    let a = localStorage.getItem("storedCountries");
    (a = JSON.parse(a)),
      (allCountries = a.allCountries),
      (theme = a.theme),
      implementTheme(),
      console.log("%cCountries retrieved from localStorage", "color:green"),
      console.log("You can visit this app without internet next time.");
  }
  ([...storedCountries] = allCountries), renderCountries(storedCountries);
}
filter.addEventListener("click", () => {
  filterOptions.style.display =
    "block" === filterOptions.style.display ? "none" : "block";
}),
  filterOption.forEach((a) => {
    a.addEventListener("click", () => {
      (regionFilter = a.getAttribute("for")),
        (storedCountries = storedCountries.filter(
          (a) => a.region.toLowerCase() == regionFilter
        )),
        renderCountries(storedCountries),
        ([...storedCountries] = allCountries),
        filter.click(),
        (filterDescription.textContent =
          regionFilter[0].toUpperCase() + regionFilter.slice(1)),
        refreshQueries();
    });
  }),
  inputSearch.addEventListener("input", () => {
    if (
      ((countriesFilter = inputSearch.value),
      (storedCountries = storedCountries.filter((a) =>
        a.name.common
          .toLocaleLowerCase()
          .includes(countriesFilter.toLocaleLowerCase())
      )),
      renderCountries(storedCountries),
      1 > storedCountries.length)
    ) {
      const a = `<div class='light ${
        "dark" === theme ? "dark" : ""
      } no-match'>No Matching Country</div>`;
      countriesContainer.innerHTML += a;
    }
    ([...storedCountries] = allCountries), implementTheme(), refreshQueries();
  }),
  body.addEventListener("click", (a) => {
    const b = a.target;
    ("MAIN" == b.tagName ||
      "SECTION" == b.tagName ||
      "FORM" == b.tagName ||
      "NAV" == b.tagName ||
      "INPUT" == b.tagName) &&
      (filterOptions.style.display = "none"),
      b.classList.contains("bordering-country") && clickedBorderingCty(b),
      refreshQueries();
  }),
  cBackBtn.addEventListener("click", () => {
    (main.style.display = "block"),
      (countryDetailsView.style.display = "none"),
      renderCountries(allCountries),
      (filterDescription.textContent = "Filter by Region");
  });
function saveData() {
  const a = { allCountries: allCountries, theme: theme };
  localStorage.setItem("storedCountries", JSON.stringify(a));
}
function renderCountries(a) {
  for (
    main.style.display = "block", countryDetailsView.style.display = "none";
    countriesContainer.hasChildNodes();

  )
    countriesContainer.removeChild(countriesContainer.firstChild);
  a.forEach((a) => {
    const b = document.createElement("ARTICLE");
    b.classList.add("country-card"),
      b.classList.add("b-radius"),
      b.classList.add("light"),
      (b.dataset.country = a.name.common);
    const c = document.createElement("IMG");
    (c.src = a.flags.png), c.classList.add("flag");
    const d = document.createElement("SECTION");
    d.classList.add("infos");
    const e = document.createElement("STRONG");
    e.classList.add("country-name"), (e.textContent = a.name.common);
    const f = document.createElement("SPAN");
    f.classList.add("info"), (f.textContent = "Population: ");
    const g = document.createElement("SPAN");
    g.classList.add("info-value"),
      (g.textContent = a.population.toLocaleString("en-US"));
    const h = document.createElement("SPAN");
    h.classList.add("info"), (h.textContent = "Region: ");
    const i = document.createElement("SPAN");
    i.classList.add("info-value"), (i.textContent = a.region);
    const j = document.createElement("SPAN");
    j.classList.add("info"), (j.textContent = "Capital: ");
    const k = document.createElement("SPAN");
    k.classList.add("info-value"),
      (k.textContent = a.capital),
      j.appendChild(k),
      f.appendChild(g),
      h.appendChild(i),
      d.appendChild(e),
      d.appendChild(f),
      d.appendChild(h),
      d.appendChild(j),
      b.appendChild(c),
      b.appendChild(d),
      countriesContainer.prepend(b);
  }),
    refreshQueries(),
    implementTheme(),
    countryCardsEventlistener();
}
function renderCountryDetails(a) {
  const [b] = a;
  (main.style.display = "none"),
    (countryDetailsView.style.display = "grid"),
    (cCountryName.textContent = b.name.common),
    (cCountryFlag.src = b.flags.png),
    (cNativename.textContent = b.altSpellings),
    (cPopulation.textContent = b.population.toLocaleString("en-US")),
    (cRegion.textContent = b.region),
    (cSubregion.textContent = b.subregion),
    (cCapital.textContent = b.capital),
    (cDomain.textContent = b.tld);
  let c;
  for (var d in b.currencies) {
    c = d;
    break;
  }
  let e = b.currencies[c].name;
  cCurrencies.textContent = e;
  const f = [];
  for (var d in b.languages) f.push(b.languages[d]);
  (cLanguages.textContent = ""),
    f.forEach((a) => {
      cLanguages.textContent += `${a}, `;
    }),
    (cLanguages.textContent = cLanguages.textContent.slice(0, -2)),
    (borderingCountriesContainer.innerHTML = ""),
    (borderingCountriesContainer.innerHTML += "Border countries:  "),
    b.borders
      ? b.borders.forEach((a) => {
          const b = `<span class="bordering-country light ${
            "dark" === theme ? "dark" : ""
          }">${whatsThisCountry(a)}</span>`;
          borderingCountriesContainer.innerHTML += b;
        })
      : console.log("No bordering country."),
    refreshQueries();
}
function whatsThisCountry(a) {
  const [b] = allCountries.filter((b) => b.cca3 === a);
  return b.name.common;
}
function refreshQueries() {
  (body = document.querySelector("body")),
    (inputSearch = document.querySelector("#search-input")),
    (fakeSelect = document.querySelector("#fake-select")),
    (realSelect = document.querySelector("select")),
    (filter = document.querySelector("#filter")),
    (filterDescription = document.querySelector("#filter-desc")),
    (filterOptions = document.querySelector("#labels")),
    (filterOption = document.querySelectorAll("label")),
    (options = document.querySelectorAll("select option")),
    (countriesContainer = document.querySelector("#countries-container")),
    (countryCard = document.querySelectorAll(".country-card")),
    (darkModeBtn = document.querySelector("#darkmode-btn")),
    (moon = document.querySelector("#moon")),
    (main = document.querySelector("main")),
    (countryDetailsView = document.querySelector("#country-details")),
    (cBackBtn = document.querySelector("#back-button")),
    (cCountryFlag = document.querySelector("#country-flag")),
    (cCountryName = document.querySelector("#country-name")),
    (cNativename = document.querySelector("#nativename")),
    (cPopulation = document.querySelector("#population")),
    (cRegion = document.querySelector("#region")),
    (cSubregion = document.querySelector("#subregion")),
    (cCapital = document.querySelector("#capital")),
    (cDomain = document.querySelector("#domain")),
    (cCurrencies = document.querySelector("#currencies")),
    (cLanguages = document.querySelector("#languages")),
    (borderingCountries = document.querySelectorAll(".bordering-country")),
    (borderingCountriesContainer = document.querySelector(".border-countries"));
}
function countryCardsEventlistener() {
  countryCard.forEach((a) => {
    a.addEventListener("click", () => {
      const b = storedCountries.filter(
        (b) => b.name.common.toLowerCase() === a.dataset.country.toLowerCase()
      );
      renderCountryDetails(b), window.scrollTo(0, 0);
    });
  }),
    refreshQueries();
}
function clickedBorderingCty(a) {
  const b = allCountries.filter((b) => b.name.common === a.textContent);
  renderCountryDetails(b), window.scrollTo(0, 0);
}
darkModeBtn.addEventListener("click", () => {
  changeTheme();
});
function changeTheme() {
  refreshQueries(),
    document.querySelectorAll("body *").forEach((a) => {
      "dark" === theme
        ? a.classList.contains("light")
          ? a.classList.add("dark")
          : null
        : "light" === theme &&
          (a.classList.contains("light") ? a.classList.remove("dark") : null);
    }),
    "dark" === theme
      ? body.classList.add("darkbody")
      : body.classList.remove("darkbody"),
    (theme = "dark" === theme ? "light" : "dark"),
    implementTheme(),
    saveData();
}
function implementTheme() {
  refreshQueries(),
    "dark" === theme
      ? body.classList.add("darkbody")
      : body.classList.remove("darkbody"),
    document.querySelectorAll("body *").forEach((a) => {
      a.classList.contains("light") && "dark" === theme
        ? a.classList.add("dark")
        : a.classList.contains("dark") &&
          "light" === theme &&
          a.classList.remove("dark");
    });
}
getData(), countryCardsEventlistener(), refreshQueries();
