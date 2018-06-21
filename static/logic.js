
//var myGeocode = {{ geocode|tojson }}

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
		"location": "bottom-left"
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
				"label": "Spiders",
				"value": 2,
				"color": "#f30000"
			},
			{
				"label": "Mother-in-laws",
				"value": 10,
				"color": "#0600f3"
			},
			{
				"label": "Sharks",
				"value": 8,
				"color": "#00b109"
			},
			{
				"label": "Alien invasion",
				"value": 8,
				"color": "#14e4b4"
			},
			{
				"label": "Learning Objective-C",
				"value": 5,
				"color": "#0fe7fb"
			},
			{
				"label": "Public speaking",
				"value": 3,
				"color": "#67f200"
			},
			{
				"label": "Donald Trump",
				"value": 4,
				"color": "#ff7e00"
			},
			{
				"label": "The Zombie Apocalypse",
				"value": 4,
				"color": "#8fe4fa"
			},
			{
				"label": "The City of Winnipeg *",
				"value": 3,
				"color": "#ff5300"
			},
			{
				"label": "IE 6",
				"value": 2,
				"color": "#640000"
			},
			{
				"label": "Planes with/out snakes",
				"value": 5,
				"color": "#3854d1"
			},
			{
				"label": "Off-by-one errors",
				"value": 3,
				"color": "#d00ed8"
			},
			{
				"label": "Chickadees",
				"value": 4,
				"color": "#7890ff"
			},
			{
				"label": "Owning a cat",
				"value": 1,
				"color": "#01664d"
			},
			{
				"label": "Canada",
				"value": 4,
				"color": "#04231b"
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
			"speed": 100
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

