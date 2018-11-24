import * as Techs from './techs.js';
import * as Roles from './roles.js';
import * as Categories from './categories.js';

function createPageData(key, title, baseImageName, temporalImages, techUsed, roles, categories) {

	const breakpoints = [1920, 1280, 570];
	const srcSet = [];

	for(let i=0; i<breakpoints.length; ++i) {

		srcSet.push({
			temporalURL: temporalImages[i],
			definitiveURL: `/files/${baseImageName}${breakpoints[i]}.jpg`,
			media: `(min-width: ${i < breakpoints.length -1 ? breakpoints[i+1] : '0'}px)`
		})

	}

	return {
		key,
		title, 
		srcSet,
		techUsed, 
		roles, 
		categories,
		alt: title,
		id: key
	};

}

let temporalImages = [
	"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQjNDMTU1RUE2OTExRTg5RjMzOTIzQjdFNjlBMDlEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQjNDMTU0RUE2OTExRTg5RjMzOTIzQjdFNjlBMDlEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTRBNTIwQjhFQTU1MTFFOEEyMjFBNTUzMDhBQkFDODciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTRBNTIwQjlFQTU1MTFFOEEyMjFBNTUzMDhBQkFDODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAGACgDAREAAhEBAxEB/8QAdgAAAgMAAAAAAAAAAAAAAAAABAUGBwoBAAIDAQAAAAAAAAAAAAAAAAMFBAYHCBAAAgIBAwQCAwAAAAAAAAAAAQIDBBEFBgcAIRIIIhQxExYRAAICAAUEAgIDAAAAAAAAAAECEQMAIVEEBTFBEiJhE4EGoUJi/9oADAMBAAIRAxEAPwDXtJyPykf2rpnrpGoFey8Muq8mbEJayiM1SGSGlquBHMV8XYP8CwwCAT1u13C8OigtzLvYXUEJtrwAv9mllmR2WM4MkGMcz17vYO/vtPBApPtahJbOFAXoD3acuwOeAtI5S53NSi+s+r2mJckrq1+HSuWNhmOCy0hBige5q58o0iwSxLfLIAIx0TccD+rC+xKOeuNCsQjNtLpYR1KhRBJyjSCcRxv6DQjvsEFxUeSi4QpnoCSZgQZ1kaYlF3kbldVqS6f68OVZ0S3Vm3/xzPYU4zJJDP8A1GnwCDvhGIeQkHMYGD1Vn4+n7nrr381AHxdq7lnQeIrcg65xocOqW/WBtg+6V/uJzVYYDU+RZARplPxGF1TkbnIWZfveu+mtTjsqsRp8hbGS3ZpuFYSMJtyyRVLEQyrLmVWOCDjPTROJ4B6kLctalxX2BotZVb4ISXU9RkpGc4XXbniELirbB0B9D5gFh/oE+pHeCwxa1bd2ryxV3m4p1yrLN5CWA7j2DN9TC+QMssW5fCVHPYGPyOfyAO/S2zi9srFU5Otk1+ncCfwa5GBjccQw8jQytoXQ/wAgxj//2Q==",
	"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgwQjAyOUQzRUE2OTExRTg5MjE2REI2RkEwQkVFNUMyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgwQjAyOUQyRUE2OTExRTg5MjE2REI2RkEwQkVFNUMyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTJDRUVEQzVFQTU2MTFFODg2RkM5MjlDNzBDMEFDOUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTJDRUVEQzZFQTU2MTFFODg2RkM5MjlDNzBDMEFDOUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAJACgDAREAAhEBAxEB/8QAjAAAAgMBAAAAAAAAAAAAAAAABQYEBwkKAQABBQEAAAAAAAAAAAAAAAAEAgMFBgcIEAABBAADBQUJAAAAAAAAAAACAQMEBQARBiESNgcIMrITs3UzcxQkNHS0FXYRAAECBAMECgEFAAAAAAAAAAECBAARAwUhMUESczUGUWFxscEiMrITNFJygsJ0Ff/aAAwDAQACEQMRAD8A64p3Vl081OpYOl5s7UQy5zbr4TmtMy3a5lhpR+ZkGJrKbjGirkfhLu5LvoOzPd2/I3Oby11bvQTQLSkoJM6oCio5BIOZ6tZiROMuanH+E1fU7bXqKDuqkqACCQB0qOQHSTiNRB+F1RdN0lS3tYfB7jjjRrZU8+KoPMqgutEyTJSBMFJF7GSouaKqYaPIfPSk7VOgmp5QryVEmaVYgjIEHqOEsZQ1UqcuI9bjZMyMUEYjMHMgjsx0nDNI588j24rUuu1E1ftutOPr+igyZngMtLuuOTHXgjMQ0EtmThIu1NmSpisO7dfWNctnqDTrhQElKBMzkBskznE6w5ebXKkK7VaVNyCQrECQzJmARLshdtOprkxUV62UsbhWGSIJ7cWFXTX64wJpDCSEOykCpgjwkogpEI7VRFRUwTbrJfLo7DJsUprL9G2VUwuc5SK0jORAJkCcJwh9YGNvbKduVpNJHq2D8hTlmEAnUEgYy0idVdSPJKyejg5aP1kaWQjGsp8MAgug4e428RNOuSmmCPYpk0gAvaVM0VZBXJ3Ng2koQlddOaErBUJCZH4k9QUSdIjVt7CmmKvzp+E5KIIBxkDIgKlPUjDWMOdQcU0v89K7snHTNs4E5/tI/jFQuXFaO4X4wPa+urPfQPJLBbnhrnd1fdAdH7zfeUvbDFrzhfWvpld3Y+MmtXE2O9X3mNIuH0Hm5T4RSvLb2EP0ew/LnYvF6zrb9HcmKjasqO4X3qi3R4grvtYPkM4Uw4Yf1L9xgV998fs9oj//2Q==",
	"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFODEyQTc3RUE2OTExRThCNEUzOUU2NUEzOUNFMTlBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFODEyQTc2RUE2OTExRThCNEUzOUU2NUEzOUNFMTlBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdDMzgwMDZFQTU2MTFFODlDNzlDQkJFRjdDOURCMDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDMzgwMDdFQTU2MTFFODlDNzlDQkJFRjdDOURCMDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAVACgDAREAAhEBAxEB/8QAjwAAAgEFAAAAAAAAAAAAAAAAAwYHBAUICQoBAAEEAwEAAAAAAAAAAAAAAAIDBQYHAAQIARAAAgIBAgMFBgcAAAAAAAAAAQIDBAURBgAhEjFBEwcIYSJCFBUWUXGBscHRMhEAAgEDAwIEBQMFAAAAAAAAAQIREgMEACEFExQxQRUGUWFxIwciMkLwwVIzJP/aAAwDAQACEQMRAD8A7XUweuhKafkun8nt4tY8gfjrmP06R4b6qkwQPw8uzmOf98ItyPlOh9Ojw/voowSj4FbXv1I0/QanXgDyPzOsOBPgNtFGDUdiD8OfVp+2vAeofM6z09f6nRVwSnkUA7+/u7h7OAPIEmdeHAWY3mNRDf8AUX5M4mqtu55l7akiYsIkovayNmcqwUrBWqVpJZGUn2DiS2fY/ufLu9Czx+RXG9UKB8ySdhqS3uU9u2E6l3LtUE7RJn6QNWSr6rfJm9BkJ6O4cpOMbWezMtjbmSoCRQeiFIZbKLG5tzEJH2szEaKeCzvYHuXjgnd2LYa64VQt1XJPiRA3FI3YmFUblhpPB5TgeRd1xbrEWxLlkZQo+O/jJ2UCSSYA1E+7fXXtnak2Fqy7JvwZG2yJuPEZrO0ocjs9bfWcXbyP0iLI1p6tyOPqlWNjPUVgZE1DJw+cJ+KeU523eyMTIR8NFJs3baNRklI6iW6ypDLMKzAJcIIUwQ2tDlOf4rh7luxnK1vLZgLlsspewrA0PcpqEHYsqksimWEgjT1t71qeUmY2yNw2Y9zYexFLPHcwsuLW9PW8F1WGyL1WQV5quRVw8HuiULydFYHhszvxnz2Hyo4pnxmdgKXrKqSZqWCNjbgh948wSDrYxeY4fK45uSC3ltLMrTU20AGBEh5lBFXjIEaYsd6t/KzLBpMPJmMrXjkSGWxj6SSrHM8YkCeDIYrDdK9p0ADAjt4SufjXn7LizlPjWchgSqXLgUsAY2O4+gncGdH6vwrWzetG/dsLALJacgEiQPAGPImIBEfPWonOFvHqfUFx3yYgw5mOCdvDaj1gotcSJ8ul4x6icqWPVqWGvLjpHi+rQ5wOp3nUu0i//nG5YiWKT+wEAeQMb6rXkqetb7wp23StT0R/CdgoJpDx+4gn4sJ2027bl3F9z51tr0aXyhz052zEuVsdEcZpSDDpjrGfw3RNOtgTGs1yKOUyMRXUIqs0A5ZMX07HHM3L3edv/wBBa2JJ6n3C4tXNkppDi2xWIN01EgTri2vd3ePDpa7XrDoBXMAU/ooNy3uapKm4A1WyCkScdPMlqxyeH6Yp0hG1KghNifIS32pkz9LZwWK0JTMJkPHJVC0LLy1VOg8W57NGeMXJkoX781UhBbqhdrNLGbRt0STDAxAJkarT3ScE37GzAdptJYvTLf7ZAi51KthKkbSBB1JeL+4T9v8A0kYKPMh63hiwbEtx18L3hMbYhpR6Yfo/0HkKdOnvcQfkPThcy/U+5PHw1UUhRv5US5HVnwgTM/p1KcT1Apjdj0BnytM1En61Qg+3HxMR/LS5EMp022ovljSafIrYiwkbKkOgrmWalPWlaWzE9sqJ4pI4kWUApIxLgPk4/wBoZYxu6C2yhvESd2pVwwhWCybbKzMVJDoAFJaVFz7pwzkdpNyoWgYA2koQZK1RWrBQDFLEkgf/2Q=="
];
const Page1 = createPageData( 1, "Virtual reconstruction of the entrance of the Ripoll Monastery", "portalada", temporalImages,
	[ Techs.OpenGL, Techs.CPlusPlus, Techs.Qt ], [ Roles.RenderingEngineer ], 
	[Categories.CG]
);

const Page2 = createPageData( 2, "Virtual Tarraco", "tarraco", temporalImages,
	[ Techs.OpenGL, Techs.CPlusPlus, Techs.Qt ], [ Roles.RenderingEngineer ], 
	[Categories.CG]
);

const Page3 = createPageData( 3, "BAIP 2020", "baip", temporalImages,
	[ Techs.OpenGL, Techs.CPlusPlus, Techs.Qt ], [ Roles.RenderingEngineer ], 
	[Categories.CG]
);

const Page4 = createPageData( 4, "Alter Fitness", "af", temporalImages,
	[ Techs.AWS, Techs.JS, Techs.HTML5, Techs.CSS3, Techs.PHP, Techs.MySQL, Techs.RaspberryPi ], [ Roles.LeadEngineer ], 
	[Categories.WebApps]
);

const Page5 = createPageData( 5, "Berga Activa", "ba", temporalImages,
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Laravel, Techs.MySQL, Techs.Android, Techs.IOS ], [ Roles.LeadEngineer ], 
	[Categories.WebApps, Categories.App]
);

const Page6 = createPageData( 6, "IASTracker", "header", temporalImages,
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Laravel, Techs.PostgreSQL, Techs.Cordova, Techs.Leaflet ], [ Roles.LeadEngineer ], 
	[Categories.WebApps, Categories.App]
);

const Page7 = createPageData( 7, "City vibes", "header", temporalImages,
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Python, Techs.Cordova, Techs.Leaflet ], [ Roles.AppDeveloper ], 
	[Categories.App]
);

const Page8 = createPageData( 8, "Instamaps, Storymaps and prototypes", "header", temporalImages,
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Leaflet, Techs.Mapbox, Techs.PostgreSQL, Techs.NodeJS ], [ Roles.FullStackDeveloper ], 
	[Categories.WebApps]
);

const Page9 = createPageData( 9, "Canhemon", "header", temporalImages,
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Leaflet, Techs.Django, Techs.React ], [ Roles.BackendDeveloper, Roles.AppDeveloper ], 
	[Categories.Web, Categories.App]
);

//altersportgim.com, martacastro.net, triatloberga.cat, bergatrail, ...
const Page10 = createPageData( 10, "Websites", "header", temporalImages,
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.PHP ], [ Roles.WebDeveloper ], 
	[Categories.Web]
);

//Access control, 3d spinning, vector tile optimizer, algorithms, apunts i projectes deep learning, aquesta web (incidència amb la velocitat i el pes)
const Page11 = createPageData( 11, "Minor and ongoing projects", "header", temporalImages,
	[Techs.Arduino, Techs.NodeJS, Techs.Keras, Techs.Tensorflow ], [ Roles.FullStackDeveloper ], 
	[Categories.Other]
);


export const Pages = [ Page1, Page2, Page3, Page4, Page5, 
	Page6, Page7, Page8, Page9, Page10, Page11 ];