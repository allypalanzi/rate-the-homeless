var map;

function init_map() {
	var myOptions = {zoom: 14,
					 center: new google.maps.LatLng(38.905971,-77.0432083),
					 mapTypeId: google.maps.MapTypeId.ROADMAP,
					 disableDefaultUI: true};
	map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
}


function marker (info, lat, lng) {
	var mark = new google.maps.Marker({map: map, position: new google.maps.LatLng(lat, lng)});
	infowindow = new google.maps.InfoWindow({content:info});
	google.maps.event.addListener(mark, "click", function(){
		infowindow.open(map,mark);
	});

	infowindow.open(map,mark);

	return mark;
}

function center_on_marker(m) {
	map.setCenter(m.getPosition());
}


function init() {
	init_map();
	var mark = marker("Homeless Joe", 38.905971, -77.0432083);
	center_on_marker(mark);
}


google.maps.event.addDomListener(window, 'load', init);