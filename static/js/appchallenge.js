
const tableData = data;
// Challenge11
var tbody = d3.select("tbody");
// Challenge11 
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {
    // Grab the datetime
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#City").property("value");
    let state = d3.select("#State").property("value");
    let country = d3.select("#Country").property("value");
    let shape = d3.select("#Shape").property("value");
    let filteredData = tableData;
    console.log(date);

    

    if (date) {

      filteredData = filteredData.filter(row => row.datetime === date);
    };

    if (city) {
      // Apply `filter` to the table data to only keep the

      filteredData = filteredData.filter(row => row.city === city);
    };

    if (state) {
      // Apply `filter` to the table data to only keep the

      filteredData = filteredData.filter(row => row.state === state);
    };

    if (country) {
      // Apply `filter` to the table data to only keep the

      filteredData = filteredData.filter(row => row.country === country);
    };

    if (shape) {
      // Apply `filter` to the table data to only keep the

      filteredData = filteredData.filter(row => row.shape === shape);
    };

     // Rebuild the table using the filtered data

    buildTable(filteredData);
  }

  // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);