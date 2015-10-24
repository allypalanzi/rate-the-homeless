var map;

function init_map() {
	var myOptions = {zoom: 14,
					 center: new google.maps.LatLng(38.905971,-77.0432083),
					 mapTypeId: google.maps.MapTypeId.ROADMAP,
					 disableDefaultUI: true};
	map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
	var noPoi = [
		{
	    	featureType: "poi",
	    	stylers: [
	      		{ visibility: "off" }
	    	]
	  	}
	];

	map.setOptions({styles: noPoi});
}


function marker (info, lat, lng) {
	var mark = new google.maps.Marker({map: map, position: new google.maps.LatLng(lat, lng)});
	infowindow = new google.maps.InfoWindow({content:info});
	google.maps.event.addListener(mark, "click", function(){
			window.location.href = "./pedro.html";
			window.location.replace("./pedro.html");
	});

	var contentString = /*'<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Joe Whatever</h1>'+
      '<div id="bodyContent">'+
      '<a href="profile.html" > <img src="images/hipster.jpg" height="120" width="120"></a>'  +
      '<p></p>'+
      '<p>Lorem ipsum dolor sit</p>' +
      '<p> amet, consectetur adipisicing </p>' +
      '<p> elit, sed do eiusmod tempor </p>' +
      '<p>incididunt ut labore et dolore </p>' +
      'magna aliqua. Ut enim ad minim</p>' +
      '<p> veniam, quis nostrud exercitation</p>'+
      '<p> ullamco laboris nisi ut aliquip</p>' +
      '<p> ex ea commodo consequat. </p>'+
      '<p> Duis aute irure dolor in</p>'+
      '<p> reprehenderit in voluptate </p>'+
      '<p>velit esse cillum dolore eu fugiat</p>'+
       '<p>nulla pariatur. Excepteur</p>'+
      '<p> sint occaecat cupidatat non</p>'+
      '<p>proident, sunt in culpa qui officia </p>' +
      '<p> deserunt mollit anim id est laborum.</p>' +
      '</div>'+
      '</div>';*/ info;

      var infowindow = new google.maps.InfoWindow({
    content: contentString
  	});

    mark.setIcon('images/marker.png');



	//infowindow.open(map,mark);

	return mark;
}

function center_on_marker(m) {
	map.setCenter(m.getPosition());
}


function init() {
	init_map();
	mark = marker("Walsh", 38.905971, -77.0432083);
	mark = marker("Walsh", 38.905971, -77.0432083);
	marker("Rupert", 38.91, -77.035);
	marker("Rupert", 38.91, -77.035);
	marker("Tasha", 38.9, -77.04);
	marker("Tasha", 38.9, -77.05);
	marker("Kirk", 38.897510, -77.037705);
	marker("Kirk", 38.923, -77.052);
	marker("Kirk", 38.899247, -77.043155);
	marker("Kirk", 38.920, -77.05123);
	marker("Kirk", 38.889661, -77.016419);
	marker("Kirk", 38.890396, -77.033714);

	center_on_marker(mark);
}


google.maps.event.addDomListener(window, 'load', init);
