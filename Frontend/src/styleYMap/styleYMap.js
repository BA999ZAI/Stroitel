ymaps.ready(init);
function init () {

    var myMap = new ymaps.Map("map", {
        center: [44.990257, 38.926537],
        zoom: 15.5,
    });

    // Метка без содержимого с точкой в центре
    var placemark1 = new ymaps.Placemark([44.990257, 38.926537], {
        hintContent: 'Метка 1',
    }, {
        'preset': 'islands#nightDotIcon'
    });

    myMap.geoObjects.add(placemark1);
}