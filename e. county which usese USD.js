fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Filter countries that use US Dollars as currency
    const countriesWithUSD = data.filter(country => {
      const currencies = country.currencies;
      return currencies && currencies.USD;
    });

    // Extract the names of countries with US Dollars as currency
    const countryNames = countriesWithUSD.map(country => country.name.common);
    
    // Print the country/countries that use US Dollars as currency
    if (countryNames.length > 0) {
      console.log("Countries using US Dollars as currency:");
      countryNames.forEach(name => console.log(name));
    } else {
      console.log("No countries found that use US Dollars as currency.");
    }
      })
      .catch(error => {
    console.log("Error fetching data:", error);
      }); 
      
      
