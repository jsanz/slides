function SmartPopup(templateId,layer, map){
	this.layer=layer;
	this.templateId=templateId;
	this.map = map;
	
	this.template = document.getElementById(templateId).innerHTML;
	
	var thisPopup = this;
	this.selectControl = new OpenLayers.Control.SelectFeature(layer,{
			onSelect: function(feature){thisPopup.onFeatureSelect(feature)}, 
			onUnselect: thisPopup.onFeatureUnselect
		});
	map.addControl(	this.selectControl );
	this.selectControl.activate();
	
	map.events.on({"zoomend":function(){thisPopup.onZoomEnd()}});
}

SmartPopup.prototype.onFeatureSelect = function (feature) {
	var selectedFeature = feature;
	this.onFeatureUnselect(feature);
	SmartPopup.popup = new OpenLayers.Popup.FramedCloud(null, 
		 selectedFeature.geometry.getBounds().getCenterLonLat(),
		 null,
		 this.template.replace(/%([^%]*)%/g, function(a,b,c,d){ return (selectedFeature.attributes[b])}),
		 null, false, null);
	SmartPopup.popup.maxSize=new OpenLayers.Size(300,500);
	this.map.addPopup(SmartPopup.popup);
}

SmartPopup.prototype.onFeatureUnselect = function(feature) {
	if (SmartPopup.popup){
		feature.layer.map.removePopup(SmartPopup.popup);
		SmartPopup.popup.destroy();
		SmartPopup.popup = null;
	}
}

SmartPopup.prototype.onZoomEnd = function () {
	if (SmartPopup.popup){
		this.map.removePopup(SmartPopup.popup);
		SmartPopup.popup.destroy();
		SmartPopup.popup = null;
	}
}


SmartPopup.popup = null;