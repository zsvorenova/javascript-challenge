// from data.js
var tableData = data;

// set variables
var tbody = d3.select("tbody");
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.selectAll("form");
// Select tabel area
var tableArea = d3.select("#table-area")

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

    // Get the value property of the input element
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var country = d3.select("#country").property("value");
    var state = d3.select("#state").property("value");
    var shape = d3.select("#shape").property("value");
    console.log(date, city, country, state, shape);
    
    // create a filter array and add inserted data
    var filter = {};
    if (date !== "") {
        filter.datetime = date;
    };
    if (city !== "") {
        filter.city = city;
    };
    if (country !== "") {
        filter.country = country;
    };
    if (state !== "") {
        filter.state = state;
    };
    if (shape !== "") {
        filter.shape = shape;
    };
    
    console.log(filter);

    // filter the data - source: https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions/44807918
    filteredData = tableData.filter(function(item) {
       for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
                return false;
                }
            return true;
    });
    console.log(filteredData);
    
    // remove data(any children) from the table body
    tbody.html("");
    tableArea.selectAll('p').html("");

    // append new data for selected day or text if no data is found
    if (filteredData.length !== 0) {
        console.log("writing table");
        writeTable(filteredData);
    } else {
        console.log("no data exists");
        tableArea.append("p").text("No such data exist!");
    };
};