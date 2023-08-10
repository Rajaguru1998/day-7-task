fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Use reduce to calculate the total population
    const totalPopulation = data.reduce((Total, country) => Total + country.population, 0);

    // Print the total population
    console.log("Total Population:", totalPopulation);
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
