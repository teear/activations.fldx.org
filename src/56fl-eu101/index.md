---
tags: ["activations"]
title: 56FL/EU101
meta_description: 56FL/EU101 IOTA from Raippaluoto and Björkö islands in the Kvarken archipelago near the city of Vaasa
display_order: 1
---

# 56FL/EU101

56FL/EU101 was last active from Björkö island in the island festival of {% date '2014' %} on Saturday ({% date '7 June' %}) and Sunday ({% date '8 June' %}).

You can find information about the EU-101 island group (located near the city of [Vaasa](https://www.vaasa.fi/en/) in Finland) on the [RSGB IOTA website](https://www.iota-world.org/islands-on-the-air/iota-groups-islands/group/429.html).

EU-101 can also be found in Islands Base Online: [http://islands.upway.pl/find_for.php?do=search&amp;io=EU-101](http://islands.upway.pl/find_for.php?do=search&amp;io=EU-101)
(**Note** however that there is also lots of **non-IOTA** islands listed as part of EU-101.)

The EU-101 island group consists of several islands, [Raippaluoto](https://en.wikipedia.org/wiki/Replot) and [Björkö](https://en.wikipedia.org/wiki/Bj%C3%B6rk%C3%B6_%28Korsholm%29) being the largest ones.

## Raippaluoto Island (Replot) on Map

<figure class="map">
<div class="embed-container">
<div id="gmap"></div>
</div>
<figcaption>Raippaluoto island (<a href="https://www.google.com/maps/@63.2734445,21.2991379,9.62z">Show larger map</a>)</figcaption>
</figure>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhGoEDyrfCM_Msjx7P4Cw-T5jQ2ztN2h0&sensor=false"></script>

<script>
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