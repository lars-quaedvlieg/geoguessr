async function loadMapData() {
  // Fetch the base map data
  const response = await fetch('data/mapData.json');
  let mapData = await response.json();
  mapData.values = {}

  // Fetch individual country data
  for (const country of mapData.countries) {
      const countryResponse = await fetch(`data/countries/${country}.json`);
      mapData.values[country] = await countryResponse.json();
      mapData.values[country].link = `country.html?country=${country}`;
  }

  return mapData;
}

loadMapData().then(mapData => {
  new svgMap({
    targetElementID: 'svgMap',
    minZoom: 0.8,
    initialZoom: 1.0,
    mouseWheelZoomWithKey: true,
    mouseWheelKeyMessage: 'Press the [CTRL] key to zoom',
    colorMax: '#b3b1b1', // Gold color for the highest value
    colorMin: '#b3b1b1',    // Light color for the lowest value
    colorNoData: '#b3b1b1', // Color for countries with no data
    noDataText: 'No tips available...',
    // onGetTooltip: function (tooltipDiv, countryID, countryValues) { return 'Custom HTML'; },
    showZoomReset: true,
    hideMissingData: true,
    data: mapData,
    countries: {
      EH: true,
      Crimea: 'UA'
    },
    onClick: function (e, countryCode) {
      window.location.href = `country.html?country=${countryCode}`;
    }
  });
});
