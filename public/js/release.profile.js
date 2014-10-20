var profile = {      
	basePath: "./", 
	layerOptimize: "closure", 
	cssOptimize:"comments.keepLines",
	releaseDir: "./release",
	stripConsole: "all",
	mini: true,
	hasReport: true,
	selectorEngine: "lite",
	staticHasFeatures:{
		"dojo-firebug": false,
		"dojo-debug-messages":true,
		'dojo-trace-api':false,
		'dojo-log-api':true,
		"async": true
	},
	plugins: {
		"xstyle/css": "xstyle/build/amd-css"
	},

	packages:[ 
		{ 
			name: "dojo", 
			location: "./dojo" 
		}, 
		{ 
			name: "dijit", 
			location: "./dijit" 
		},
		{ 
			name: "dojox", 
			location: "./dojox" 
		},
		{ 
			name: "cid", 
			location: "./cid"
		},
		{ 
			name: "dgrid", 
			location: "./dgrid"
		},
		{ 
			name: "put-selector", 
			location: "./put-selector"
		},
		{ 
			name: "xstyle", 
			location: "./xstyle"
		},
		{ 
			name: "dbind", 
			location: "./dbind"
		}
	], 

	layers: {             
	}
};

