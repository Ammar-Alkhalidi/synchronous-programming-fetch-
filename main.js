const button = document.querySelector('button');
const ul = document.querySelector('ul');

// Task 1: Create  function
async function processData() {
  try {
    // 1. Fetch 
    const response = await fetch('./data.txt');

    // 2. Check  response 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // 3. fetched data into  array 
    const textData = await response.text();
    const dataArray = textData.split('\n')
    .map(item => item.trim())
    .filter((word) => word.length > 0);

    // 4. Sort alphabetic
    const sortedData = dataArray.sort();

    // 5. Display  sorted data 
    ul.innerHTML = ''; 
    sortedData.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  } catch (error) {
    console.error('Error:', error.message);
    ul.innerHTML = '<li>Error fetching or processing data.</li>';
  }
}

// Attach the processData function to the button click event
button.addEventListener('click', processData);
