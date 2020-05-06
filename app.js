// from data.js
var tableData = data;
//var inputElement = d3.select("#datetime");
//var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

console.log(tableData);

data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// Use D3 to select the table body
//var tbody = d3.select("tbody");

// Use D3 to select the table
//var table = d3.select("table");

// Iterate through each student/grade pair
//tableData.forEach((datetime, city, state, country, shape, durationMinutes, comments) => {

    // Append one table row per student/grade
// var row = tbody.append("tr");
  
    // append one cell for the student and one cell for the grade
   // row.append("td").text(datetime);
    //row.append("td").text(city);
    //row.append("td").text(state);
    //row.append("td").text(country);
    //row.append("td").text(shape);
    //row.append("td").text(durationMinutes);
    //row.append("td").text(comments);
  //});
  
  // Variables

 // var ufoData = data;

// Select the button


//button.on("click", function() {

   //Select the input element and get the raw HTML node
  

  // Get the value property of the input element
 // var inputValue = inputElement.property("value");

 // console.log(inputValue);
 // console.log(tableData);

//  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

 // console.log(tableData);

 var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);

    var newData = tableData.filter(ufoinfo => ufoinfo.datetime === inputValue);
 
    console.log(newData);


    newData.forEach(function(dataselected) {

    console.log(dataselected);
  
    var row = tbody.append("tr");
    Object.entries(dataselected).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});