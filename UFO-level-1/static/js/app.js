// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
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

