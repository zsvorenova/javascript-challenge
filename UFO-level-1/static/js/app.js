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

