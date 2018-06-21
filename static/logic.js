
var vehicleCollision = {{ collisions | tojson | safe}};

var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "LA Vehicle Collisions",
			"font": "courier"
		},
		"subtitle": {
			"text": "Descent which have the most vehicular accidents?",
			"color": "#999999",
			"fontSize": 9,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "*We want to know which descent have the move vehicles collisions in LA from Year 2010 - 2018.",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "90%",
		"pieOuterRadius": "70%"
	},
	"data": {
		"sortOrder": "random",
		"content": [
			{
				"label": "Asian",
				"value": 2,
				"color": "#f30000"
			},
			{
				"label": "Caucasian",
				"value": 10,
				"color": "#0600f3"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#999999",
			"fontSize": 11,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"load": {
			"speed": 5000
		},
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 650,
			"size": 9
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});

