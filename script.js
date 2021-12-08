async function handleData() {
  const data = await d3.csv('NYCdata.csv')
  console.log(data)

  const niceData = [
    {name: "Rape Female", value: parseInt(data[0].Rape_Female)},
    {name: "Rape Male", value: parseInt(data[0].Rape_Male)},
    {name: "Murder Female", value: parseInt(data[0].Murder_Female)},
    {name: "Murder Male", value: parseInt(data[0].Murder_Male)},
    {name: "Assault Female", value: parseInt(data[0].FelonyAssault_Female)},
    {name: "Assault Male", value: parseInt(data[0].FelonyAssault_Male)},
    {name: "Strangulation Female", value: parseInt(data[0].Strangulation_Female)},
    {name: "Strangulation Male", value: parseInt(data[0].Strangulation_Male)},
    {name: "Stalking Female", value: parseInt(data[0].Stalking_Female)},
    {name: "Stalking Male", value: parseInt(data[0].Stalking_Male)},
  ]
  console.log(niceData)

  const margin = { top: 10, right: 10, bottom: 20, left: 40 }
  const width = 800 - (margin.left + margin.right)
  const height = 300 - (margin.top + margin.bottom)

  // x scale 
  const xscale = d3.scaleBand()
    .domain(niceData.map(d => d.name))
    .range([margin.left, width + margin.left])
    .padding(0.05)

  // y scale 
  const popExtent = d3.extent(niceData, d => d.value)
  const yscale = d3.scaleLinear()
    .domain(popExtent)
    .range([height, margin.top])

  // Select the SVG
  const svg = d3.select('#svg')

  const barGroup = svg.append('g')

  // Make the bars
  barGroup 
    .selectAll('rect')
    .data(niceData)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => xscale(d.name))
    .attr('y', d => yscale(d.value))
    .attr('width', xscale.bandwidth())
    .attr('height', d => height - yscale(d.value))

  const bottomAxis = d3.axisBottom(xscale)
  svg
    .append('g')
    .attr('transform', `translate(${0}, ${height})`)
    .call(bottomAxis)

  const leftAxis = d3.axisLeft(yscale)
  svg
    .append('g')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(leftAxis)



}

handleData()