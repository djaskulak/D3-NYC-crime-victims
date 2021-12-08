async function handleData() {
  const data = await d3.csv('NYCdata.csv')
  console.log(data)
}
handleData()