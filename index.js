import { dates } from '/utils/dates';

const tickersArr = []; // Array to store ticker symbols

// Select the generate report button
const generateReportBtn = document.querySelector('.generate-report-btn');

// Fetch stock data (dummy implementation)
function fetchStockData() {
    console.log('Fetching stock data for:', tickersArr);
    alert(`Generating report for: ${tickersArr.join(', ')}`);
}

// Render the ticker symbols to the UI
function renderTickers() {
    const tickerList = document.getElementById('ticker-list');
    tickerList.innerHTML = ''; // Clear existing list

    tickersArr.forEach(ticker => {
        const listItem = document.createElement('li');
        listItem.textContent = ticker;
        tickerList.appendChild(listItem);
    });
}

// Add click event to the generate report button
generateReportBtn.addEventListener('click', fetchStockData);

// Handle form submission for ticker input
document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const tickerInput = document.getElementById('ticker-input');

    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false; // Enable the button
        const newTickerStr = tickerInput.value.trim();
        tickersArr.push(newTickerStr.toUpperCase()); // Add to array
        tickerInput.value = ''; // Clear input field
        renderTickers(); // Update the ticker list in UI
    } else {
        // Highlight label in red for invalid input
        const label = document.getElementsByTagName('label')[0];
        label.style.color = 'red';
    }
});
