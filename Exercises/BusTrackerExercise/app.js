var url = "https://api-v3.mbta.com/vehicles?filter[route]=1"
async function getVehiclesInfo () {
	const response = await fetch(url);
	const json = await response.json();
	return json.data;
}
mapboxgl.accessToken = "pk.eyJ1Ijoieml1ciIsImEiOiJja3RweTRscnEwZjFvMndsYW03NTJyZHVoIn0.bgYwUs_3ZysQbXxk-fuDQA";
let map = new mapboxgl.Map({container: "map",
							style: "mapbox://styles/mapbox/streets-v11",
							center: [-71.104081, 42.365554],
							zoom: 12,});
let counter = 0;
var markersList = [];
var routeInfoList = [];
var routeInfoContainer = document.getElementById('route-info-container');
async function createMarkers() {
	let data = await getVehiclesInfo();
	data.forEach(vehicle => {
		let marker = new mapboxgl.Marker().setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude]).addTo(map);
		markersList.push(marker);
		routeInfo = {};
		routeInfo.label = vehicle.attributes.label;
		routeInfo.ocupancy = vehicle.attributes.occupancy_status;
		routeInfo.status = vehicle.attributes.current_status;
		createDOMElement(routeInfo);
	});
}
function updateInfo() {
	if(markersList.length > 0){
		markersList.forEach(marker => {
			marker.remove();
		});
	}
	markersList = [];
	createMarkers();
}
function createDOMElement(info) {
	let div = document.createElement("div");
	div.classList.add('route-info');
	div.innerHTML = '<p>Route Number: ' +  info.label + '</p>' +
					'<p>Status: ' +  info.status + '</p>' +
					'<p>Occupacy Status: ' + info.ocupancy + '</p>';
	routeInfoContainer.appendChild(div);
}