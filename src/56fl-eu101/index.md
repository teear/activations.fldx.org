---
tags: ["activations"]
title: 56FL/EU101
display_order: 1
---

# 56FL/EU101

56FL/EU101 was last active from Björkö island in the <a href="http://islandfestival.net/">island festival</a> of 2014 on Saturday (07/06) and Sunday (08/06).

Information about the EU-101 island group (located near the city of Vaasa in Finland) on RSGB IOTA website: <a href="https://www.iota-world.org/islands-on-the-air/iota-groups-islands/group/429.html" target="_blank">EU-101 Island Group</a>

EU-101 island group consists of several islands, <a href="http://en.wikipedia.org/wiki/Replot" target="_blank">Raippaluoto</a> and <a href="http://en.wikipedia.org/wiki/Bj%C3%B6rk%C3%B6_%28Korsholm%29" target="_blank">Bj&ouml;rk&ouml;</a> being the largest ones.

EU-101 can also be found in Islands Base Online: <a href="http://islands.uznam.net.pl/find_for.php?do=search&amp;io=EU-101">http://islands.uznam.net.pl/find_for.php?do=search&amp;io=EU-101</a>
(Note however that there is also lots of non-IOTA islands listed as part of EU-101.)

## Raippaluoto Island (Replot) on Map

<figure class="map">
<div class="embed-container">
<div id="gmap"></div>
</div>
<figcaption>Raippaluoto island (<a href="//maps.google.fi/?t=h&amp;ll=63.239811,21.228333&amp;spn=0.593609,1.757813&amp;z=9" class="show-l">Show larger map</a>)</figcaption>
</figure>

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhGoEDyrfCM_Msjx7P4Cw-T5jQ2ztN2h0&sensor=false"></script>

<script type="text/javascript">
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            zoom: 10, //Initial zoom-level (required)
            center: new google.maps.LatLng(63.239811, 21.228333), // Raippaluoto
            //Styling (Snazzy Maps)
            styles: [   {       featureType:'water',        stylers:[{color:'#46bcec'},{visibility:'on'}]   },{     featureType:'landscape',        stylers:[{color:'#f2f2f2'}] },{     featureType:'road',     stylers:[{saturation:-100},{lightness:45}]  },{     featureType:'road.highway',     stylers:[{visibility:'simplified'}] },{     featureType:'road.arterial',        elementType:'labels.icon',      stylers:[{visibility:'off'}]    },{     featureType:'administrative',       elementType:'labels.text.fill',     stylers:[{color:'#444444'}] },{     featureType:'transit',      stylers:[{visibility:'off'}]    },{     featureType:'poi',      stylers:[{visibility:'off'}]    }]
        };

        // Get the HTML DOM element that will contain your map
        var mapElement = document.getElementById('gmap');

        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
    }
</script>