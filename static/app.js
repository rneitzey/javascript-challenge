// Java Script to pull in and filter data.js

// Create function to bring in entire table on page
function appendTable(alienData){
    d3.select("tbody").html("");
    alienData.forEach((alienRow) => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(alienRow).forEach((value) => {
            tableRow.append("td").text(value);
        });
    })
}
// Run function with table data
appendTable(alienSightings);

// Create function for filtering by date if date is in input for button event
function buttonEvent(){
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    if(date) {
        appendTable(alienSightings.filter((row) => row.datetime === date));
    } else {
        appendTable(alienSightings);
    }
}

// Create listener event
button = d3.select("#filter-btn");
button.on("click", buttonEvent);









