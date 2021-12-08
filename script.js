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
  const R17yscale = d3.scaleLinear()
    .domain([0, 650])
    .range([height - margin.top, 0])
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
    .attr('transform', "translate(40, 10)")
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
  const R18yscale = d3.scaleLinear()
  .domain([0, 800])
  .range([height - margin.top, 0])
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
    .attr('transform', "translate(40, 10)")
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
    .domain([0, 900])
    .range([height - margin.top, 0])
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
    .attr('transform', "translate(40, 10)")
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
    const M17yscale = d3.scaleLinear()
      .domain([0, 40])
      .range([height - margin.top, 0]);
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
      .attr('transform', "translate(40, 10)")
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
    const M18yscale = d3.scaleLinear()
      .domain([0, 40])
      .range([height - margin.top, 0])
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
      .attr('transform', 'translate(40, 10)')
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
      .domain([0, 50])
      .range([height - margin.top, 0])
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
      .attr('transform', 'translate(40, 10)')
      .call(M19leftAxis)
  
  /* -----------------------------------SEX OFFENSE DATA---------------------------------------- */
    /* -------------- 2017 -------------- */
    const sexOffensesData2017 = [
      {name: "Female", value: parseInt(data[0].SexOffenses_Female)},
      {name: "Male", value: parseInt(data[0].SexOffenses_Male)}
    ]
    console.log(sexOffensesData2017)
    // x scale 
    const SEX17xscale = d3.scaleBand()
      .domain(sexOffensesData2017.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const SEX17yscale = d3.scaleLinear()
      .domain([0, 1400])
      .range([height - margin.top, 0])
    // Select the SVG
    const sexOffensesSvg2017 = d3.select('#sexOffensesSvg2017')
    const SEX17barGroup = sexOffensesSvg2017.append('g')
    // Make the bars
    SEX17barGroup 
      .selectAll('rect')
      .data(sexOffensesData2017)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => SEX17xscale(d.name))
      .attr('y', d => SEX17yscale(d.value))
      .attr('width', SEX17xscale.bandwidth())
      .attr('height', d => height - SEX17yscale(d.value))
    const SEX17bottomAxis = d3.axisBottom(SEX17xscale)
    sexOffensesSvg2017
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(SEX17bottomAxis)
    const SEX17leftAxis = d3.axisLeft(SEX17yscale)
    sexOffensesSvg2017
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(SEX17leftAxis)
  
  
    /* -------------- 2018 -------------- */
    const sexOffensesData2018 = [
      {name: "Female", value: parseInt(data[1].SexOffenses_Female)},
      {name: "Male", value: parseInt(data[1].SexOffenses_Male)}
    ]
    console.log(sexOffensesData2018)
    // x scale 
    const SEX18xscale = d3.scaleBand()
      .domain(sexOffensesData2018.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const SEX18yscale = d3.scaleLinear()
      .domain([0, 1700])
      .range([height - margin.top, 0])
    // Select the SVG
    const sexOffensesSvg2018 = d3.select('#sexOffensesSvg2018')
    const SEX18barGroup = sexOffensesSvg2018.append('g')
    // Make the bars
    SEX18barGroup 
      .selectAll('rect')
      .data(sexOffensesData2018)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => SEX18xscale(d.name))
      .attr('y', d => SEX18yscale(d.value))
      .attr('width', SEX18xscale.bandwidth())
      .attr('height', d => height - SEX18yscale(d.value))
    const SEX18bottomAxis = d3.axisBottom(SEX18xscale)
    sexOffensesSvg2018
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(SEX18bottomAxis)
    const SEX18leftAxis = d3.axisLeft(SEX18yscale)
    sexOffensesSvg2018
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(SEX18leftAxis)
  
    /* -------------- 2019 -------------- */
    const sexOffensesData2019 = [
      {name: "Female", value: parseInt(data[2].SexOffenses_Female)},
      {name: "Male", value: parseInt(data[2].SexOffenses_Male)}
    ]
    console.log(sexOffensesData2019)
    // x scale 
    const SEX19xscale = d3.scaleBand()
      .domain(sexOffensesData2019.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const SEX19yscale = d3.scaleLinear()
      .domain([0, 1800])
      .range([height - margin.top, 0])
    // Select the SVG
    const sexOffensesSvg2019 = d3.select('#sexOffensesSvg2019')
    const SEX19barGroup = sexOffensesSvg2019.append('g')
    // Make the bars
    SEX19barGroup 
      .selectAll('rect')
      .data(sexOffensesData2019)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => SEX19xscale(d.name))
      .attr('y', d => SEX19yscale(d.value))
      .attr('width', SEX19xscale.bandwidth())
      .attr('height', d => height - SEX19yscale(d.value))
    const SEX19bottomAxis = d3.axisBottom(SEX19xscale)
    sexOffensesSvg2019
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(SEX19bottomAxis)
    const SEX19leftAxis = d3.axisLeft(SEX19yscale)
    sexOffensesSvg2019
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(SEX19leftAxis)

    /* --------------------------------FELONY ASSAULT DATA------------------------------------- */
    /* -------------- 2017 -------------- */
    const assaultData2017 = [
      {name: "Female", value: parseInt(data[0].FelonyAssault_Female)},
      {name: "Male", value: parseInt(data[0].FelonyAssault_Male)}
    ]
    console.log(assaultData2017)
    // x scale 
    const A17xscale = d3.scaleBand()
      .domain(assaultData2017.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const A17yscale = d3.scaleLinear()
      .domain([0, 3500])
      .range([height - margin.top, 0])
    // Select the SVG
    const assaultSvg2017 = d3.select('#assaultSvg2017')
    const A17barGroup = assaultSvg2017.append('g')
    // Make the bars
    A17barGroup 
      .selectAll('rect')
      .data(assaultData2017)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => A17xscale(d.name))
      .attr('y', d => A17yscale(d.value))
      .attr('width', A17xscale.bandwidth())
      .attr('height', d => height - A17yscale(d.value))
    const A17bottomAxis = d3.axisBottom(A17xscale)
    assaultSvg2017
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(A17bottomAxis)
    const A17leftAxis = d3.axisLeft(A17yscale)
    assaultSvg2017
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(A17leftAxis)
  
  
    /* -------------- 2018 -------------- */
    const assaultData2018 = [
      {name: "Female", value: parseInt(data[1].FelonyAssault_Female)},
      {name: "Male", value: parseInt(data[1].FelonyAssault_Male)}
    ]
    console.log(assaultData2018)
    // x scale 
    const A18xscale = d3.scaleBand()
      .domain(assaultData2018.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const A18yscale = d3.scaleLinear()
      .domain([0, 3500])
      .range([height - margin.top, 0])
    // Select the SVG
    const assaultSvg2018 = d3.select('#assaultSvg2018')
    const A18barGroup = assaultSvg2018.append('g')
    // Make the bars
    A18barGroup 
      .selectAll('rect')
      .data(assaultData2018)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => A18xscale(d.name))
      .attr('y', d => A18yscale(d.value))
      .attr('width', A18xscale.bandwidth())
      .attr('height', d => height - A18yscale(d.value))
    const A18bottomAxis = d3.axisBottom(A18xscale)
    assaultSvg2018
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(A18bottomAxis)
    const A18leftAxis = d3.axisLeft(A18yscale)
    assaultSvg2018
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(A18leftAxis)
  
    /* -------------- 2019 -------------- */
    const assaultData2019 = [
      {name: "Female", value: parseInt(data[2].FelonyAssault_Female)},
      {name: "Male", value: parseInt(data[2].FelonyAssault_Male)}
    ]
    console.log(assaultData2019)
    // x scale 
    const A19xscale = d3.scaleBand()
      .domain(assaultData2019.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const A19yscale = d3.scaleLinear()
      .domain([0, 3500])
      .range([height - margin.top, 0])
    // Select the SVG
    const assaultSvg2019 = d3.select('#assaultSvg2019')
    const A19barGroup = assaultSvg2019.append('g')
    // Make the bars
    A19barGroup 
      .selectAll('rect')
      .data(assaultData2019)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => A19xscale(d.name))
      .attr('y', d => A19yscale(d.value))
      .attr('width', A19xscale.bandwidth())
      .attr('height', d => height - A19yscale(d.value))
    const A19bottomAxis = d3.axisBottom(A19xscale)
    assaultSvg2019
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(A19bottomAxis)
    const A19leftAxis = d3.axisLeft(A19yscale)
    assaultSvg2019
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(A19leftAxis)

    /* --------------------------------STRANGULATION DATA------------------------------------- */
    /* -------------- 2017 -------------- */
    const strangleData2017 = [
      {name: "Female", value: parseInt(data[0].Strangulation_Female)},
      {name: "Male", value: parseInt(data[0].Strangulation_Male)}
    ]
    console.log(strangleData2017)
    // x scale 
    const STR17xscale = d3.scaleBand()
      .domain(strangleData2017.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const STR17yscale = d3.scaleLinear()
      .domain([0, 5000])
      .range([height - margin.top, 0])
    // Select the SVG
    const strangleSvg2017 = d3.select('#strangleSvg2017')
    const STR17barGroup = strangleSvg2017.append('g')
    // Make the bars
    STR17barGroup 
      .selectAll('rect')
      .data(strangleData2017)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => STR17xscale(d.name))
      .attr('y', d => STR17yscale(d.value))
      .attr('width', STR17xscale.bandwidth())
      .attr('height', d => height - STR17yscale(d.value))
    const STR17bottomAxis = d3.axisBottom(STR17xscale)
    strangleSvg2017
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(STR17bottomAxis)
    const STR17leftAxis = d3.axisLeft(STR17yscale)
    strangleSvg2017
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(STR17leftAxis)
  
  
    /* -------------- 2018 -------------- */
    const strangleData2018 = [
      {name: "Female", value: parseInt(data[1].Strangulation_Female)},
      {name: "Male", value: parseInt(data[1].Strangulation_Male)}
    ]
    console.log(strangleData2018)
    // x scale 
    const STR18xscale = d3.scaleBand()
      .domain(strangleData2018.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const STR18yscale = d3.scaleLinear()
      .domain([0, 5100])
      .range([height - margin.top, 0])
    // Select the SVG
    const strangleSvg2018 = d3.select('#strangleSvg2018')
    const STR18barGroup = strangleSvg2018.append('g')
    // Make the bars
    STR18barGroup 
      .selectAll('rect')
      .data(strangleData2018)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => STR18xscale(d.name))
      .attr('y', d => STR18yscale(d.value))
      .attr('width', STR18xscale.bandwidth())
      .attr('height', d => height - STR18yscale(d.value))
    const STR18bottomAxis = d3.axisBottom(A18xscale)
    strangleSvg2018
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(STR18bottomAxis)
    const STR18leftAxis = d3.axisLeft(STR18yscale)
    strangleSvg2018
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(STR18leftAxis)
  
    /* -------------- 2019 -------------- */
    const strangleData2019 = [
      {name: "Female", value: parseInt(data[2].Strangulation_Female)},
      {name: "Male", value: parseInt(data[2].Strangulation_Male)}
    ]
    console.log(strangleData2019)
    // x scale 
    const STR19xscale = d3.scaleBand()
      .domain(strangleData2019.map(d => d.name))
      .range([margin.left, width + margin.left])
      .padding(0.05)
    // y scale 
    const STR19yscale = d3.scaleLinear()
      .domain([0, 5100])
      .range([height - margin.top, 0])
    // Select the SVG
    const strangleSvg2019 = d3.select('#strangleSvg2019')
    const STR19barGroup = strangleSvg2019.append('g')
    // Make the bars
    STR19barGroup 
      .selectAll('rect')
      .data(strangleData2019)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => STR19xscale(d.name))
      .attr('y', d => STR19yscale(d.value))
      .attr('width', STR19xscale.bandwidth())
      .attr('height', d => height - STR19yscale(d.value))
    const STR19bottomAxis = d3.axisBottom(STR19xscale)
    strangleSvg2019
      .append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .call(STR19bottomAxis)
    const STR19leftAxis = d3.axisLeft(STR19yscale)
    strangleSvg2019
      .append('g')
      .attr('transform', 'translate(40, 10)')
      .call(STR19leftAxis)
  /* ---------------------------------------------------------------------------------------- */

}

handleData()