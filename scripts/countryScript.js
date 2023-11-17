document.addEventListener('DOMContentLoaded', async () => {
    // Parse the country code from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const countryCode = queryParams.get('country');

    if (countryCode) {
        try {
            // Fetch the country's data
            const response = await fetch(`data/countries/${countryCode}.json`);
            const countryData = await response.json();

            // Update the DOM with the country's data
            const countryInfoDiv = document.getElementById('countryInfo');
            countryInfoDiv.innerHTML = `<h2>${countryData.name}</h2>
                                        <p>Additional info: ${countryData.tip}</p>`;
        } catch (error) {
            console.error('Error fetching country data:', error);
            document.getElementById('countryInfo').innerText = 'Error loading country data.';
        }
    } else {
        document.getElementById('countryInfo').innerText = 'No country specified.';
    }
});
