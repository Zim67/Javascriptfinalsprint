const outputDiv = document.getElementById('output');

// Fetch the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Log the data to the console
    console.log(data);

    // Display the data in the browser window
    displayData(data);

    // Call the three functions to describe the data
    const numRecords = getNumRecords(data);
    const avgValue = getAvgValue(data, 'price');
    const firstRecord = getFirstRecord(data);

    // Display the descriptions in the browser window
    outputDiv.innerHTML += `<p>Number of records: ${numRecords}</p>`;
    outputDiv.innerHTML += `<p>Average price: ${avgValue}</p>`;
    outputDiv.innerHTML += `<p>First record: ${JSON.stringify(firstRecord)}</p>`;
  })
  .catch(error => {
    // Handle any errors that occur during the fetch process
    console.error('Error fetching JSON file:', error);
  });

// Display the data in the browser window
function displayData(data) {
  data.forEach(item => {
    outputDiv.innerHTML += `<p>${item.name}: ${item.price}</p>`;
  });
}

// Get the number of records in the JSON file
function getNumRecords(data) {
  return data.length;
}

// Get the average value of a particular key in the JSON file
function getAvgValue(data, key) {
  const values = data.map(item => item[key]);
  const total = values.reduce((accumulator, currentValue) => accumulator + currentValue);
  const average = total / values.length;
  return average.toFixed(2);
}

// Get the first record in the JSON file
function getFirstRecord(data) {
  return data[0];
}
{
}
