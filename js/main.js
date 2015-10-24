function init_map() {
	var myOptions = {zoom: 14,
					 center: new google.maps.LatLng(38.905971,-77.0432083),
					 mapTypeId: google.maps.MapTypeId.ROADMAP,
					 disableDefaultUI: true};
	map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
	marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(38.905971, -77.0432083)});
	infowindow = new google.maps.InfoWindow({content:"Homeless Joe" });
	google.maps.event.addListener(marker, "click", function(){
		infowindow.open(map,marker);
	});

	infowindow.open(map,marker);
}


google.maps.event.addDomListener(window, 'load', init_map);