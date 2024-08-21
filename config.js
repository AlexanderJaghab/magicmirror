/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
    module: 'MMM-Remote-Control',
    // uncomment the following line to show the URL of the remote control on the mirror
    position: 'bottom_left',
    // you can hide this module afterwards from the remote control itself
    config: {
        customCommand: {},  // Optional, See "Using Custom Commands" below
        showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        secureEndpoints: true, // Optional, See API/README.md
        // uncomment any of the lines below if you're gonna use it
        // customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        // apiKey: "", // Optional, See API/README.md for details
        // classes: {} // Optional, See "Custom Classes" below
		}
},
		{
			module: "alert",
		},
		{
       			module: 'MMM-ModuleScheduler',
			config: {
          		  // SHOW ALL MODULES AT 07:00 AND HIDE AT 22:00 EVERY DAY
            			global_schedule: {from: '0 7 * * *', to: '0 22 * * *' }
        			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
			config: {
				clock: {
				timezone: America/Chicago
				displaySeconds: true
				showDate: true 
				showSunTimes: true
				lat: 41.99490814522176
				lon: -87.6579318056822
				}
			}
		},
		{
			module: "calendar",
			header: "School Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/u/4?cid=YWphZ2hhYmx1Y0BnbWFpbC5jb20"
						timeFormat: absolute
						maximumEntries: 25
						maximumNumberOfDays: 2
						maxTitleLength: 50
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
			config: {
				compliments: {
						day_sunny: [
							"Today is a sunny day",
							"It's a beautiful day"
						],
						snow: [
							"Snowball battle!"
						],
						rain: [
							"Don't forget your umbrella"
		]
	}
}
			
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 41.99490814522176
				lon:  -87.6579318056822
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 41.99490814522176,
				lon:  -87.6579318056822
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
