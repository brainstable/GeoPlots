// ==============================================================  
//            СТИЛИ
// ============================================================== 

var fullColor = 'black';

//=================================
// Стиль границы ГСУ
//=================================
function fullStyle(feature){
    return {
        fillColor : '#FED976',
        weight : 2,
        opacity : 1,
        color : fullColor,
        dashArray : 2,
        fillOpacity : 0.7
    }
}; 
//=================================
// Стиль дорог
//=================================
function roadStyle(feature){
    return {
        weight: 2,
        color : 'yellow',
        dashArray : 3,
        fillOpacity : 0.9
    }
}; 
//=================================
// Стиль границ полей
//=================================
function fieldStyle(feature){
    return {
        fillColor : '#FED976',
        weight : 2,
        opacity : 1,
        color : 'black',
        dashArray : 2,
        fillOpacity : 0.7
    }
}; 
//=================================
// Стиль границ культур
//=================================
/*
var colorCultures = [
    'пшеница яровая' : yellow,
    'овес яровой' : red
];
*/


/*
function cultureNameStyleColor(feature) {
    return {
        fillColor: getNameCultureColor(feature.properties.Culture),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '1',
        fillOpacity: 0.7
    }
};
*/
//=========================================
var opacityCulture = 1;
var fillOpacityCulture = 1;

function getTypeUsingColor(d) {
    return d == 'сортоиспытание' ? '#800026' :
        d == 'уравнительный посев'  ? '#FC4E2A' :
        d == 'размножение' ? '#FED976' :
                    '#FFEDA0';
};

function cultureStyleColor(feature) {
    return {
        fillColor: getTypeUsingColor(feature.properties.TypeUsing),
        weight: 2,
        opacity: opacityCulture,
        color: 'black',
        dashArray: '1',
        fillOpacity: fillOpacityCulture
    }
};

function getNameCultureColor(q) {
    return q == 'Донник' ? 'yellow' :
        q == 'Горох' ? '#1CA9C9' :
        q == 'Гречиха' ? 'yellow' :
        q == 'Кукуруза' ? '#007D34' :
        q == 'Лен масличный' ? '#F7F21A' : 
        q == 'Овес яровой' ? 'Magenta' :
        q == 'Пар черный' ? '#403A3A' :
        q == 'Пшеница озимая' ? 'black' :
        q == 'Пшеница яровая' ? '#FFCF40' :
        q == 'Рапс яровой' ? 'yellow' :
        q == 'Рожь озимая' ? 'yellow' :
        q == 'Соя' ? '#FF6347' :
        q == 'Эспарцет' ? 'yellow' :
        q == 'Ячмень яровой' ? 'red' :
        '#808000';
};

function cultureNameStyleColor(feature) {
    return {
        fillColor: getNameCultureColor(feature.properties.Culture),
        weight: 2,
        opacity: opacityCulture,
        color: 'black',
        dashArray: '1',
        fillOpacity: fillOpacityCulture
    }
};
 
function cultureStyle(feature){
    return {
        fillColor : 'black',
        weight : 2,
        opacity : 1,
        color : 'black',
        dashArray : 1,
        fillOpacity : 0
    }
}; 