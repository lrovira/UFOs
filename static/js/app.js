// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Takes two numbers and adds them
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

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let changeElement = d3.select(this); // select all current 
  let elementValue = changeElement.property("value");  
  let filterID = changeElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

  if (elementValue){
    filters[filterID]=elementValue; // assign key - value pair
  }
  else {
    delete filters[filterID]; //delete key if no value
  }

  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData

  let filterData = tableData

  // Loop through all of the filters and keep any data that
  // matches the filter values

  Object.entries(filters).forEach(([key,value])=>{
    filterData = filterData.filter(row => row[key] === value);
  })

  // Finally, rebuild the table using the filtered Data
  buildTable(filterData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);