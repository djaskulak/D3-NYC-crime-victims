async function handleData() {
  const data = await d3.csv('NYCdata.csv')
  console.log(data)

  const niceData = [
    {crime: "Rape", year: "2017", gender: "Female", value: parseInt(data[0].Rape_Female)},
    {crime: "Rape", year: "2017", gender: "Male", value: parseInt(data[0].Rape_Male)},
    {crime: "Rape", year: "2018", gender: "Female", value: parseInt(data[1].Rape_Female)},
    {crime: "Rape", year: "2018", gender: "Male", value: parseInt(data[1].Rape_Male)},
    {crime: "Rape", year: "2019", gender: "Female", value: parseInt(data[2].Rape_Female)},
    {crime: "Rape", year: "2019", gender: "Male", value: parseInt(data[2].Rape_Male)},
    {crime: "Murder", year: "2017", gender: "Female", value: parseInt(data[0].Murder_Female)},
    {crime: "Murder", year: "2017", gender: "Male", value: parseInt(data[0].Murder_Male)},
    {crime: "Murder", year: "2018", gender: "Female", value: parseInt(data[1].Murder_Female)},
    {crime: "Murder", year: "2018", gender: "Male", value: parseInt(data[1].Murder_Male)},
    {crime: "Murder", year: "2019", gender: "Female", value: parseInt(data[2].Murder_Female)},
    {crime: "Murder", year: "2019", gender: "Male", value: parseInt(data[2].Murder_Male)},
    {crime: "Assault", year: "2017", gender: "Female", value: parseInt(data[0].FelonyAssault_Female)},
    {crime: "Assault", year: "2017", gender: "Male", value: parseInt(data[0].FelonyAssault_Male)},
    {crime: "Assault", year: "2018", gender: "Female", value: parseInt(data[1].FelonyAssault_Female)},
    {crime: "Assault", year: "2018", gender: "Male", value: parseInt(data[1].FelonyAssault_Male)},
    {crime: "Assault", year: "2019", gender: "Female", value: parseInt(data[2].FelonyAssault_Female)},
    {crime: "Assault", year: "2019", gender: "Male", value: parseInt(data[2].FelonyAssault_Male)},
    {crime: "Strangulation", year: "2017", gender: "Female", value: parseInt(data[0].Strangulation_Female)},
    {crime: "Strangulation", year: "2017", gender: "Male", value: parseInt(data[0].Strangulation_Male)},
    {crime: "Strangulation", year: "2018", gender: "Female", value: parseInt(data[1].Strangulation_Female)},
    {crime: "Strangulation", year: "2018", gender: "Male", value: parseInt(data[1].Strangulation_Male)},
    {crime: "Strangulation", year: "2019", gender: "Female", value: parseInt(data[2].Strangulation_Female)},
    {crime: "Strangulation", year: "2019", gender: "Male", value: parseInt(data[2].Strangulation_Male)},
    {crime: "Stalking", year: "2017", gender: "Female", value: parseInt(data[0].Rape_Female)},
    {crime: "Stalking", year: "2017", gender: "Male", value: parseInt(data[0].Rape_Male)},
    {crime: "Stalking", year: "2018", gender: "Female", value: parseInt(data[1].Rape_Female)},
    {crime: "Stalking", year: "2018", gender: "Male", value: parseInt(data[1].Rape_Male)},
    {crime: "Stalking", year: "2019", gender: "Female", value: parseInt(data[2].Rape_Female)},
    {crime: "Stalking", year: "2019", gender: "Male", value: parseInt(data[2].Rape_Male)}
  ]
  console.log(niceData)

  const svg = d3.select('#svg')
  const circles = svg.append('g')
  circles
    .select('#svg')
    .style('border', '1px solid')
    .selectAll('circle')
    .data(niceData)
    .data(data)
    .enter()
    .append('circle')
}
handleData()