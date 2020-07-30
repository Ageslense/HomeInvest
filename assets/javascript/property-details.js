function createMap(){
   var opts = {
      center: {
         lat: 40.712784,
         lng: -74.005941,
      },
      zoom: 11,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]}],
      maxZoom: 20,
      minZoom: 0,
      mapTypeId: 'roadmap',
   };

   
   opts.clickableIcons = false;
   opts.disableDoubleClickZoom = false;
   opts.draggable = true;
   opts.keyboardShortcuts = true;
   opts.scrollwheel = true;
   

   
   var setControlOptions = function(key, enabled, position, style, mapTypeIds){
      opts[key + 'Control'] = enabled;
      opts[key + 'ControlOptions'] = {
         position: google.maps.ControlPosition[position],
         style: google.maps.MapTypeControlStyle[style],
         mapTypeIds: mapTypeIds
      };
   };
   
      
   setControlOptions('fullscreen',false,'DEFAULT','',null);
   
      
   setControlOptions('mapType',false,'DEFAULT','DEFAULT',["roadmap","satellite","terrain"]);
   
      
   setControlOptions('rotate',false,'DEFAULT','',null);
   
      
   setControlOptions('scale',false,'','',null);
   
      
   setControlOptions('streetView',true,'DEFAULT','',null);
   
      
   setControlOptions('zoom',true,'DEFAULT','',null);
   

   var map = new google.maps.Map(document.getElementById('map'), opts);

   
   (function(){
      var markerOptions = {
         map: map,
         position: {
            lat: 40.705497,
            lng: -73.980648,
         }
      };
      
      markerOptions.icon = {
         url: 'https://snazzy-maps-cdn.azureedge.net/assets/marker-5616f97c-3e02-43bb-bb5e-7252f0cc660e.png',
         scaledSize: new google.maps.Size(
            72,
            72),
         size: new google.maps.Size(
            72,
            72),
         anchor: new google.maps.Point(
            36,
            72)
      };
      markerOptions.options = {
         optimized: true,
      };
      
      var marker = new google.maps.Marker(markerOptions);


   })();
   

}

$('.property-slider-top').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.property-slider-bottom'
   });
   $('.property-slider-bottom').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.property-slider-top',
   centerMode: true,
   focusOnSelect: true,
   arrows: false,
   });