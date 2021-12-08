async function handleData() {
  const data = await d3.csv('NYCdata.csv')
  console.log(data)

  const margin = { top: 10, right: 10, bottom: 20, left: 40 }
  const width = 800 - (margin.left + margin.right)
  const height = 300 - (margin.top + margin.bottom)

  /* ---------------------------------------------------------------------------------------- */
  /* -------------------------------------RAPE DATA------------------------------------------ */

  /* -------------- 2017 -------------- */
  const rapeData2017 = [
    {name: "Female", value: parseInt(data[0].Rape_Female)},
    {name: "Male", value: parseInt(data[0].Rape_Male)}
  ]
  console.log(rapeData2017)
  // x scale 
  const R17xscale = d3.scaleBand()
    .domain(rapeData2017.map(d => d.name))
    .range([margin.left, width + margin.left])
    .padding(0.05)
  // y scale 
  const R17popExtent = d3.extent(rapeData2017, d => d.value)
  const R17yscale = d3.scaleLinear()
    .domain(R17popExtent)
    .range([height, margin.top])
  // Select the SVG
  const rapeSvg2017 = d3.select('#rapeSvg2017')
  const R17barGroup = rapeSvg2017.append('g')
  // Make the bars
  R17barGroup 
    .selectAll('rect')
    .data(rapeData2017)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => R17xscale(d.name))
    .attr('y', d => R17yscale(d.value))
    .attr('width', R17xscale.bandwidth())
    .attr('height', d => height - R17yscale(d.value))
  const R17bottomAxis = d3.axisBottom(R17xscale)
  rapeSvg2017
    .append('g')
    .attr('transform', `translate(${0}, ${height})`)
    .call(R17bottomAxis)
  const R17leftAxis = d3.axisLeft(R17yscale)
  rapeSvg2017
    .append('g')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(R17leftAxis)


  /* -------------- 2018 -------------- */
  const rapeData2018 = [
    {name: "Female", value: parseInt(data[1].Rape_Female)},
    {name: "Male", value: parseInt(data[1].Rape_Male)}
  ]
  console.log(rapeData2018)
  // x scale 
  const R18xscale = d3.scaleBand()
    .domain(rapeData2018.map(d => d.name))
    .range([margin.left, width + margin.left])
    .padding(0.05)
  // y scale 
  const R18popExtent = d3.extent(rapeData2018, d => d.value)
  const R18yscale = d3.scaleLinear()
    .domain(R18popExtent)
    .range([height, margin.top])
  // Select the SVG
  const rapeSvg2018 = d3.select('#rapeSvg2018')
  const R18barGroup = rapeSvg2018.append('g')
  // Make the bars
  R18barGroup 
    .selectAll('rect')
    .data(rapeData2018)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => R18xscale(d.name))
    .attr('y', d => R18yscale(d.value))
    .attr('width', R18xscale.bandwidth())
    .attr('height', d => height - R18yscale(d.value))
  const R18bottomAxis = d3.axisBottom(R18xscale)
  rapeSvg2018
    .append('g')
    .attr('transform', `translate(${0}, ${height})`)
    .call(R18bottomAxis)
  const R18leftAxis = d3.axisLeft(R18yscale)
  rapeSvg2018
    .append('g')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(R18leftAxis)

  /* -------------- 2019 -------------- */
  const rapeData2019 = [
    {name: "Female", value: parseInt(data[2].Rape_Female)},
    {name: "Male", value: parseInt(data[2].Rape_Male)}
  ]
  console.log(rapeData2019)
  // x scale 
  const R19xscale = d3.scaleBand()
    .domain(rapeData2019.map(d => d.name))
    .range([margin.left, width + margin.left])
    .padding(0.05)
  // y scale 
  const R19popExtent = d3.extent(rapeData2019, d => d.value)
  const R19yscale = d3.scaleLinear()
    .domain(R19popExtent)
    .range([height, margin.top])
  // Select the SVG
  const rapeSvg2019 = d3.select('#rapeSvg2019')
  const R19barGroup = rapeSvg2019.append('g')
  // Make the bars
  R19barGroup 
    .selectAll('rect')
    .data(rapeData2019)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => R19xscale(d.name))
    .attr('y', d => R19yscale(d.value))
    .attr('width', R19xscale.bandwidth())
    .attr('height', d => height - R19yscale(d.value))
  const R19bottomAxis = d3.axisBottom(R19xscale)
  rapeSvg2019
    .append('g')
    .attr('transform', `translate(${0}, ${height})`)
    .call(R19bottomAxis)
  const R19leftAxis = d3.axisLeft(R19yscale)
  rapeSvg2019
    .append('g')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(R19leftAxis)

  /* -------------------------------------MURDER DATA------------------------------------------ */
    /* -------------- 2017 -------------- */
    const murderData2017 = [
      {name: "Female", value: parseInt(data[0].Murder_Female)},
      {name: "Male", value: parseInt(data[0].Murder_Male)}
    ]
    console.log(murderData2017)
    // x scale 
    const M17xscale = d3.scaleBand()
      .domain(murderData2017.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const M17popExtent = d3.extent(murderData2017, d => d.value)
    const M17yscale = d3.scaleLinear()
      .domain(M17popExtent)
      .range([height, margin.top])
    // Select the SVG
    const murderSvg2017 = d3.select('#murderSvg2017')
    const M17barGroup = murderSvg2017.append('g')
    // Make the bars
    M17barGroup 
      .selectAll('rect')
      .data(murderData2017)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => M17xscale(d.name))
      .attr('y', d => M17yscale(d.value))
      .attr('width', M17xscale.bandwidth())
      .attr('height', d => height - M17yscale(d.value))
    const M17bottomAxis = d3.axisBottom(M17xscale)
    murderSvg2017
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(M17bottomAxis)
    const M17leftAxis = d3.axisLeft(M17yscale)
    murderSvg2017
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(M17leftAxis)
  
  
    /* -------------- 2018 -------------- */
    const murderData2018 = [
      {name: "Female", value: parseInt(data[1].Murder_Female)},
      {name: "Male", value: parseInt(data[1].Murder_Male)}
    ]
    console.log(murderData2018)
    // x scale 
    const M18xscale = d3.scaleBand()
      .domain(murderData2018.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const M18popExtent = d3.extent(murderData2018, d => d.value)
    const M18yscale = d3.scaleLinear()
      .domain(M18popExtent)
      .range([height, margin.top])
    // Select the SVG
    const murderSvg2018 = d3.select('#murderSvg2018')
    const M18barGroup = murderSvg2018.append('g')
    // Make the bars
    M18barGroup 
      .selectAll('rect')
      .data(murderData2018)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => M18xscale(d.name))
      .attr('y', d => M18yscale(d.value))
      .attr('width', M18xscale.bandwidth())
      .attr('height', d => height - M18yscale(d.value))
    const M18bottomAxis = d3.axisBottom(M18xscale)
    murderSvg2018
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(M18bottomAxis)
    const M18leftAxis = d3.axisLeft(M18yscale)
    murderSvg2018
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(M18leftAxis)
  
    /* -------------- 2019 -------------- */
    const murderData2019 = [
      {name: "Female", value: parseInt(data[2].Murder_Female)},
      {name: "Male", value: parseInt(data[2].Murder_Male)}
    ]
    console.log(murderData2019)
    // x scale 
    const M19xscale = d3.scaleBand()
      .domain(murderData2019.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const M19popExtent = d3.extent(murderData2019, d => d.value)
    const M19yscale = d3.scaleLinear()
      .domain(M19popExtent)
      .range([height, margin.top])
    // Select the SVG
    const murderSvg2019 = d3.select('#murderSvg2019')
    const M19barGroup = murderSvg2019.append('g')
    // Make the bars
    M19barGroup 
      .selectAll('rect')
      .data(murderData2019)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => M19xscale(d.name))
      .attr('y', d => M19yscale(d.value))
      .attr('width', M19xscale.bandwidth())
      .attr('height', d => height - M19yscale(d.value))
    const M19bottomAxis = d3.axisBottom(M19xscale)
    murderSvg2019
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(M19bottomAxis)
    const M19leftAxis = d3.axisLeft(M19yscale)
    murderSvg2019
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(M19leftAxis)
  
  
  /* ---------------------------------------------------------------------------------------- */

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
}

handleData()