const button = document.querySelector('button');
const ul = document.querySelector('ul');

// Task: Fetch and process data
async function processData() {
  try {
    // 1. Fetch data from `data.txt`
    const response = await fetch('./data.txt');

    // 2. Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // 3. Read the fetched data and process it
    const textData = await response.text();
    const dataArray = textData
      .split('\n') // Split into lines
      .map(item => item.trim()) // Remove extra spaces
      .filter(word => word.length > 0); // Remove empty lines

    // 4. Sort the array alphabetically
    const sortedData = dataArray.sort();

    // 5. Clear and populate the <ul> with sorted data
    ul.innerHTML = ''; // Clear existing items
    sortedData.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  } catch (error) {
    console.error('Error:', error.message);

    // Display error message in the UI
    ul.innerHTML = '<li>Error fetching or processing data.</li>';
  }
}

// Attach the `processData` function to the button's click event
button.addEventListener('click', processData);
