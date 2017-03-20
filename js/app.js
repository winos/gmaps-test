var map = undefined

function initMap () {

  var domMap = document.getElementById('map')
  var latlng = new google.maps.LatLng(6.307955, -75.576715)

  var myOptions = {
    zoom: 19,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  }

  map = new google.maps.Map(domMap, myOptions)

  var drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.RECTANGLE,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.RECTANGLE
      ]
    },
    //markerOptions: {icon: 'images/beachflag.png'},
    circleOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }
  });

  drawingManager.setMap(map);

  google.maps.event.addListener(drawingManager, 'rectanglecomplete', function(polygon) {
    //if (polygon.type == google.maps.drawing.OverlayType.RECTANGLE) {
      //var coordinatesArray = polygon.overlay.getPaths().getArray();
      console.log(polygon);
    //}
  });

/*
  google.maps.event.addListener(drawingManager, 'rectanglecomplete', function(polygon) {
    drawingManager.setDrawingMode(null);
    var arr=[];
    polygon.getPath().forEach(function(latLng){arr.push(latLng.toString());})
    alert(arr.join(',\n'));
});*/


}
