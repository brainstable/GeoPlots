function fullOnEachFeature(feature, layer) {
    var popupContent1 = '';
    
    if (feature.properties && feature.properties.PlotName) {
        popupContent1 = 
            "<div class='card text-center border-success mb-3' style='max-width: 18rem;'>" + 
                "<div class='card-header'>" +
                    feature.properties.DistName + 
                "</div>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + feature.properties.PlotName + "</h5>" +
                "<div class='table-responsive'>" + 
                    "<table class='table table-sm'>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td>Тип</td>" +
                                "<th scope='row'>" + feature.properties.TypePlot + "</th>" +
                            "</tr>" +
                            "<tr>" +
                                "<td>Площадь, га</td>" +
                                "<th scope='row'>" +  feature.properties.Square + "</th>" +
                            "</tr>" +
                            "<tr>" +
                                "<td>Природная зона</td>" +
                                "<th scope='row'>" +  feature.properties.ZoneName + "</th>" +
                            "</tr>" +
                            "<tr>" +
                                "<td>Адрес</td>" +
                                "<th scope='row'>" +  feature.properties.Address + "</th>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "</div>" +
                "</div>" +
            "</div>"
    }
    layer.bindPopup(popupContent1);
};

function fieldOnEachFeature(feature, layer) {
    var popupContent1 = '';
    
    if (feature.properties && feature.properties.FieldName) {
        popupContent1 = 

        "<div class='card text-center border-success mb-3' style='max-width: 18rem;'>" + 
            "<div class='card-header'>" +
                feature.properties.FieldName + 
            "</div>" +
            "<div class='card-body'>" +
            "<div class='table-responsive'>" + 
                "<table class='table table-sm'>" +
                    "<tbody>" +
                        "<tr>" +
                            "<td>Площадь, га</td>" +
                            "<th scope='row'>" +  feature.properties.Square + "</th>" +
                        "</tr>" +
                    "</tbody>" +
                "</table>" +
                "</div>" +
            "</div>" +
        "</div>"


    }
    layer.bindPopup(popupContent1);
};

function cultureOnEachFeature(feature, layer) {
    var popupContent = '';
    var typeUsing = '';
    if (feature.properties.TypeUsing){
        typeUsing = feature.properties.TypeUsing
    };

    var predec = '';
    if (feature.properties.Predec){
        predec = feature.properties.Predec
    };

    var product = '';
    if (feature.properties.Product){
        product = feature.properties.Product
    };

    var crop = '';
    if (feature.properties.YearCrop){
        crop = feature.properties.YearCrop
    };

    var sort = '';
    if (feature.properties.Sort){
        sort= feature.properties.Sort
    };
    
    if (feature.properties && feature.properties.Culture) {
        popupContent = 
        "<div class='card text-center border-success mb-3' style='max-width: 18rem;'>" + 
            "<div class='card-header'>" +
                feature.properties.Culture + 
            "</div>" +
            "<div class='card-body'>" +
            "<div class='table-responsive'>" + 
                "<table class='table table-sm'>" +
                    "<tbody>" +
                        "<tr>" +
                            "<td>Тип</td>" +
                            "<th scope='row'>" +  typeUsing + "</th>" +
                        "</tr>" +
                        "<tr>" +
                            "<td>Площадь, га</td>" +
                            "<th scope='row'>" +  feature.properties.Square + "</th>" +
                        "</tr>" +
                        "<tr>" +
                            "<td>Предшественник</td>" +
                            "<th scope='row'>" +  predec + "</th>" +
                        "</tr>" +
                        "<tr>" +
                            "<td>Продукция</td>" +
                            "<th scope='row'>" +  product + "</th>" +
                        "</tr>" +
                        "<tr>" +
                            "<td>Год посева</td>" +
                            "<th scope='row'>" +  crop + "</th>" +
                        "</tr>" +
                        "<tr>" +
                            "<td>Сорт</td>" +
                            "<th scope='row'>" +  sort + "</th>" +
                        "</tr>" +
                    "</tbody>" +
                "</table>" +
                "</div>" +
            "</div>" +
        "</div>"
        
        
    }
    layer.bindPopup(popupContent);
};


// 
