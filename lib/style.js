// ==============================================================  
//            СТИЛИ
// ============================================================== 
//=================================
// Стиль границы ГСУ
//=================================
function fullStyle(feature){
    return {
        fillColor : '#FED976',
        weight : 4,
        opacity : 1,
        color : 'red',
        dashArray : 2,
        fillOpacity : 0.7
    }
}; 
//=================================
// Стиль дорог
//=================================
function roadStyle(feature){
    return {
        weight: 3,
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
        weight : 2.5,
        opacity : 1,
        color : 'green',
        dashArray : 2,
        fillOpacity : 0.7
    }
}; 
//=================================
// Стиль границ культур
//=================================
function getTypeUsingColor(d) {
    return d == 'сортоиспытание' ? '#800026' :
        d == 'уравнительный посев'  ? '#FC4E2A' :
        d == 'размножение' ? '#FED976' :
                    '#FFEDA0';
}

function cultureStyleColor(feature) {
    return {
        fillColor: getTypeUsingColor(feature.properties.TypeUsing),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '1',
        fillOpacity: 0.7
    };
}
 
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