// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);

tableData.forEach((i) => {
    // console.log(i);
    // append row for each ufo sighting case
    var row = tbody.append("tr");

    Object.entries(i).forEach(([key, value]) => {
        // console.log (key, value);
        // append a cell to the row for each value in the ufo sightings dataset
        var cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    // console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    // Then, select the unordered list element by class name
    // var list = d3.select(".summary");

    // remove data(any children) from the table body
    tbody.html("");

    // append new data
    filteredData.forEach((i) => {
        // console.log(i);
        // append row for each ufo sighting case
        var row = tbody.append("tr");
    
        Object.entries(i).forEach(([key, value]) => {
            // console.log (key, value);
            // append a cell to the row for each value in the ufo sightings dataset
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
