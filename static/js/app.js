// from data.js
var tableData = data;

// YOUR CODE HERE!
// Viewing the available data fromt he data.js
// console.log(tableData);

// Get references
var tbody = d3.select("tbody");
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select('form');
// Select the date
var inputElement = d3.select('#datetime');

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Console.log the data_filtereds data from data.js
console.log(tableData);

// Use d3 to update each cell's text with report values
data.forEach(function(data_filtered) {
  console.log(data_filtered);
  var row = tbody.append("tr");
  Object.entries(data_filtered).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value
    // in the report object

    var cell = row.append("td");
    cell.text(value);
  });
});




// Create event handlers
button.on("click", submitForm);
form.on("submit", submitForm);

// Form Function - filter data when submit and button click
function submitForm() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value from the input
  var inputValue = inputElement.property('value');

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(data_filtered => data_filtered.datetime === inputValue);
  console.log(filteredData);

  // Clear current table body
  tbody.html("");
  

  // Get a reference to the table body and save to new variable
  var filterTbody = d3.select("tbody");

  // Create table pulling information matching the filter
  filteredData.forEach(function(data_filtered) {
  console.log(data_filtered);
  var row = filterTbody.append("tr");
  Object.entries(data_filtered).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});
};