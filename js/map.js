var GM = {
    init: function () {
        this.initCache();
        this.initMap();

    },

    initCache: function () {
        this.$body = $('body');
        this.$popupContent = $('.js-marker-content');

    },

    initMap: function () {
        var coordinates = {
                lat: 55.794507,
                lng: 37.774819
            },
            popupContent = this.$popupContent.html(),
            markerImage = './img/marker.png',
            zoom = 16;


        map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true,
                scrollwheel: false
            }),
            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });



        map.setOptions({
            styles: styles
        });


    }

};

$(document).ready(function () {
    GM.init();
});