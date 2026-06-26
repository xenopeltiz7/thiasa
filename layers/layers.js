var wms_layers = [];

var format_Provinsi_0 = new ol.format.GeoJSON();
var features_Provinsi_0 = format_Provinsi_0.readFeatures(json_Provinsi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provinsi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provinsi_0.addFeatures(features_Provinsi_0);
var lyr_Provinsi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provinsi_0, 
                style: style_Provinsi_0,
                popuplayertitle: 'Provinsi',
                interactive: true,
                title: '<img src="styles/legend/Provinsi_0.png" /> Provinsi'
            });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasProvinsi_2 = new ol.format.GeoJSON();
var features_BatasProvinsi_2 = format_BatasProvinsi_2.readFeatures(json_BatasProvinsi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_2.addFeatures(features_BatasProvinsi_2);
var lyr_BatasProvinsi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasProvinsi_2, 
                style: style_BatasProvinsi_2,
                popuplayertitle: 'Batas Provinsi',
                interactive: true,
                title: '<img src="styles/legend/BatasProvinsi_2.png" /> Batas Provinsi'
            });
var format_1stYearPlaces_3 = new ol.format.GeoJSON();
var features_1stYearPlaces_3 = format_1stYearPlaces_3.readFeatures(json_1stYearPlaces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1stYearPlaces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1stYearPlaces_3.addFeatures(features_1stYearPlaces_3);
cluster_1stYearPlaces_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_1stYearPlaces_3
});
var lyr_1stYearPlaces_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_1stYearPlaces_3, 
                style: style_1stYearPlaces_3,
                popuplayertitle: '1st Year Places',
                interactive: true,
                title: '<img src="styles/legend/1stYearPlaces_3.png" /> 1st Year Places'
            });

lyr_Provinsi_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BatasProvinsi_2.setVisible(true);lyr_1stYearPlaces_3.setVisible(true);
var layersList = [lyr_Provinsi_0,lyr_GoogleSatellite_1,lyr_BatasProvinsi_2,lyr_1stYearPlaces_3];
lyr_Provinsi_0.set('fieldAliases', {'fid': 'fid', 'WADMPR': 'WADMPR', });
lyr_BatasProvinsi_2.set('fieldAliases', {'fid': 'fid', 'WADMPR': 'WADMPR', });
lyr_1stYearPlaces_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Provinsi_0.set('fieldImages', {'fid': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_BatasProvinsi_2.set('fieldImages', {'fid': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_1stYearPlaces_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Provinsi_0.set('fieldLabels', {'fid': 'no label', 'WADMPR': 'inline label - always visible', });
lyr_BatasProvinsi_2.set('fieldLabels', {'fid': 'no label', 'WADMPR': 'no label', });
lyr_1stYearPlaces_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_1stYearPlaces_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});