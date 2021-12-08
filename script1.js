
const data = await d3.csv('NYCdata.csv')
console.log(data)


var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

/* ---------------------------------------------------------------------------------------- */
/* -------------------------------------RAPE DATA------------------------------------------ */

/* -------------- DATA -------------- */
const rapeData2017 = [
  {name: "Female", value: parseInt(data[0].Rape_Female)},
  {name: "Male", value: parseInt(data[0].Rape_Male)}
]
const rapeData2018 = [
  {name: "Female", value: parseInt(data[1].Rape_Female)},
  {name: "Male", value: parseInt(data[1].Rape_Male)}
]
const rapeData2019 = [
  {name: "Female", value: parseInt(data[2].Rape_Female)},
  {name: "Male", value: parseInt(data[2].Rape_Male)}
]

var rapesvg = d3.select("#rapeData")
  .append("rapesvg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.2);
var xAxis = rapesvg.append("g")
  .attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleLinear()
  .range([ height, 0]);
var yAxis = rapesvg.append("g")
  .attr("class", "myYaxis")

// A function that create / update the plot for a given variable:
function update(data) {

  // Update the X axis
  x.domain(data.map(function(d) { return d.group; }))
  xAxis.call(d3.axisBottom(x))

  // Update the Y axis
  y.domain([0, d3.max(data, function(d) { return d.value }) ]);
  yAxis.transition().duration(1000).call(d3.axisLeft(y));

  // Create the u variable
  var u = rapesvg.selectAll("rect")
    .data(data)

  u
    .enter()
    .append("rect") // Add a new rect for each new elements
    .merge(u) // get the already existing elements as well
    .transition() // and apply changes to all of them
    .duration(1000)
      .attr("x", function(d) { return x(d.group); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", "#69b3a2")

  // If less group in the new dataset, I delete the ones not in use anymore
  u
    .exit()
    .remove()
}
// Initialize the plot with the first dataset
update(rapeData2017)