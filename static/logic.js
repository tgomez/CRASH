
var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "LA Vehicle Collision",
			"fontSize": 23,
			"font": "courier"
		},
		"subtitle": {
			"text": "Victim Descent",
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"text": "* Vehicle Collision vs Demographics",
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "95%",
		"pieOuterRadius": "70%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Other Asian",
				"value": 15495,
				"color": "#333333"
			},
			{
				"label": "Black",
				"value": 53164,
				"color": "#444444"
			},
			{
				"label": "Chinese",
				"value": 582,
				"color": "#555555"
			},
			{
				"label": "Cambodian",
				"value": 11,
				"color": "#666666"
			},
			{
				"label": "Filipino",
				"value": 1200,
				"color": "#777777"
			},
			{
				"label": "Guamanian",
				"value": 30,
				"color": "#888888"
			},
			{
				"label": "Hispanic/Latin/Mexican",
				"value": 146134,
				"color": "#999999"
			},
			{
				"label": "American Indian/Alaskan Native",
				"value": 127,
				"color": "#cb2121"
			},
			{
				"label": "Japanese",
				"value": 240,
				"color": "#830909"
			},
			{
				"label": "Korean",
				"value": 3378,
				"color": "#923e99"
			},
			{
				"label": "Laotian",
				"value": 4,
				"color": "#ae83d5"
			},
			{
				"label": "Pacific Islander ",
				"value": 155,
				"color": "#111111"
			},
			{
				"label": "Samoan",
				"value": 26,
				"color": "#050505"
			},
			{
				"label": "Hawaiian",
				"value": 216,
				"color": "#646464"
			},
			{
				"label": "Vietnamese",
				"value": 151,
				"color": "#747474"
			},
			{
				"label": "White",
				"value": 94176,
				"color": "#efefef"
			},
			{
				"label": "Unknown",
				"value": 10043,
				"color": "#efefef"
			},
			{
				"label": "Asian Indian",
				"value": 109,
				"color": "#efefef"
			},
			{
				"label": "Other",
				"value": 53096,
				"color": "#efefef"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage1",
			"pieDistance": 28
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
			"speed": 3000
		},
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});

