# Sort and Display Data from File
This project fetches data from a text file (data.txt), processes it to remove empty lines and sort the content alphabetically, and dynamically displays the sorted data in a list on a web page.

# Features
- Fetches data from a local data.txt file using the Fetch API.
- Handles errors gracefully with user-friendly error messages.
- Processes the text data:
- Splits data into lines.
- Trims whitespace from each line.
- Filters out empty lines.
- Sorts the remaining lines alphabetically.
- Dynamically updates the <ul> list in the web page with the processed data.
# Usage Instructions
# 1. Setup
Clone or download the project files.
Ensure the following files are in the same directory:
index.html
script.js (contains the JavaScript code)
data.txt (the text file to fetch data from)
# 2. File Descriptions
index.html: The main HTML file containing the structure of the page.
script.js: The JavaScript file that processes and displays the data.
data.txt: The text file containing the data to be sorted and displayed. Ensure it contains line-separated entries.
# 3. Running the Project
Open index.html in any modern web browser.
Click the button on the page to fetch and display the sorted data from data.txt.
