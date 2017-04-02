'use strict'
const geolib = require('geolib')

console.log(geolib.isPointInside(
    {latitude: 6.308033821722825, longitude:  -75.57662084698677},
    [
        {latitude: 6.308297752659778, longitude: -75.57678177952766},
        {latitude: 6.308279090880778, longitude: -75.57595834136009},
        {latitude: 6.307681913597824, longitude: -75.5758698284626},
        {latitude: 6.307705907341209, longitude: -75.57699367403984}
    ]
))
