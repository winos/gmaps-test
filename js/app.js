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
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYGON]
        },
        polygonOptions: {
            editable: true,
            draggable: true
        }
    })

  drawingManager.setMap(map)

  google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
    if (polygon.type == google.maps.drawing.OverlayType.POLYGON) {
      var paths = event.overlay.getPath().getArray()
      paths.forEach(function (latLng) {
        console.log(latLng.toString())
      })
    }
  })
}
