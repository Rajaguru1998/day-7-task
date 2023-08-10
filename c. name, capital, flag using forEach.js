fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Iterate over each country using forEach
    data.forEach(country => {
      const name = country.name;
      const capital = country.capital;
      const flag = country.flags.png;

      // Print the details for each country
      console.log("Name:", name);
      console.log("Capital:", capital);
      console.log("Flag:", flag);
      console.log("=================================================================================================");
      
    });
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });