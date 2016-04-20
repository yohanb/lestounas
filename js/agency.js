/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google maps configuration
var canvas = $("#map-canvas")[0];
var coordinates = new google.maps.LatLng(46.45130,-73.00160 );
var options = {
center: coordinates,
zoom: 8,
scrollwheel: false,
mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map = new google.maps.Map(canvas, options);
var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title: 'Le Baluchon Éco-villégiature',
    url: "https://www.google.ca/maps/place/Le+Baluchon+%C3%89co-vill%C3%A9giature/@46.4513735,-73.0038276,17z/data=!4m2!3m1!1s0x0000000000000000:0x945f4633aee4825f"
});

google.maps.event.addListener(marker, 'click', function() {
    window.location.href = this.url;
});

// Slippry slider configuration
$("#slider").slippry({ pager: false, autoHover: false });

$(function(){
    var isEurope = getParameterByName("europe");
    if (isEurope !== null) {
        $("#noKids").hide();
    }
})