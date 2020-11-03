// from data.js
var tableData = data;

// set variables
var tbody = d3.select("tbody");
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");
// Select tabel area
var tableArea=d3.select("#table-area")

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

// create a function for writing the table
function writeTable(data) {
    data.forEach((i) => {
        // append row for each ufo sighting case
        var row = tbody.append("tr");

        Object.entries(i).forEach(([key, value]) => {
            // append a cell to the row for each value in the ufo sightings dataset
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// initial table while loading
writeTable(tableData);

// Complete the event handler function for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    // to ensure that full tabel will load after clearing the form we add the if condition
    if (inputValue === "") {
        var filteredData = tableData;
    }
    else {
        var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
        console.log(filteredData);
    };    

    // remove data(any children) from the table body
    tbody.html("");

    // append new data for selected day or text if no data is found
    if (filteredData.length !== 0) {
        console.log("writing table");
        writeTable(filteredData);
    }
    else {
        console.log("no data exists");
        tableArea.append("p").text("No such data exist!");
    };
};
