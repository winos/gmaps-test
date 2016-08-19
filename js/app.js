var map = undefined

function initMap () {


    // buttons
    var btnCalculate = document.getElementById('calculateBtn')

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

    btnCalculate.addEventListener('click', function () {
      // inputs
      var origin = document.getElementById('origin').value
      var destination = document.getElementById('destination').value

      var mapRoute = new GoogleRoute({map: map})
      mapRoute.calculateRoute(origin, destination)
    }, false)
}

function GoogleRoute (options) {
  this.options = options
  this.map = this.options.map
  this.directionService = new google.maps.DirectionsService()
  this.directionsDisplay = new google.maps.DirectionsRenderer()
  this.directionsDisplay.setMap(this.map)
}

GoogleRoute.prototype.calculateRoute = function (origin, destination) {

  var request = {
    origin: origin,
    destination: destination,
    provideRouteAlternatives: true,
    //origin: new google.maps.LatLng(origin),
    //destination: new google.maps.LatLng(destination),
    travelMode: google.maps.TravelMode.DRIVING
  }

  var selfDirectionDisplay = this.directionsDisplay
  this.directionService.route(request, function (result, status) {
    if (status === google.maps.DirectionsStatus.OK)
      selfDirectionDisplay.setDirections(result)
  })
}

function createCheckPoint (points) {
  this.checkPoint = new google.maps.Polygon({paths:points})
  return function (eventLatLng) {
    return google.maps.geometry.poly.containsLocation(eventLatLng, this.checkPoint)
  }
}
