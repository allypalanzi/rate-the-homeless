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

    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(38.905971, -77.0432083),
    map: map,
    title: 'Joe Whatever'
 
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);

  });  

	//infowindow.open(map,mark);

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