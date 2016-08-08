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

    var checkPoint = createCheckPoint([
      new google.maps.LatLng(6.307665, -75.576866),
      new google.maps.LatLng(6.307688, -75.576536),
      new google.maps.LatLng(6.307458, -75.576504),
      new google.maps.LatLng(6.307455, -75.576835)
    ])

    map.addListener('click', function(e) {

      if (checkPoint(e.latLng)) {
        var markerLatLng = {lat:e.latLng.lat(), lng:e.latLng.lng()}
        ,   marker = new google.maps.Marker({
              position: markerLatLng,
              map: map,
              title: 'Location'
            })
        map.setCenter(markerLatLng)
      }
    })
}

function createCheckPoint (points) {
  this.checkPoint = new google.maps.Polygon({paths:points})
  return function (eventLatLng) {
    return google.maps.geometry.poly.containsLocation(eventLatLng, this.checkPoint)
  }
}
