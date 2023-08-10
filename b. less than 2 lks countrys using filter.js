//population of less than 2 lakhs (200,000) using the filter function


fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => 
    {
    // Filter countries with population less than 2 lakhs
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);

    // Extract the names of countries with less than 2 lakhs population
    const countryNames = countriesWithLessPopulation.map(country => country.name.common);
   
    console.log(countryNames);


    })
  .catch(error => {
    console.log("Error fetching data:", error);
  });