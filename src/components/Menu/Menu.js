import React, { Component } from 'react';
import ResponsivePicture from '../ResponsivePicture/ResponsivePicture';
import * as Categories from '../../data/categories.js';
import styles from './Menu.module.css';

class Menu extends Component {
	constructor(props) {
		super(props);
		const srcSet = [
			{
				temporalURL: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQjNDMTU1RUE2OTExRTg5RjMzOTIzQjdFNjlBMDlEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQjNDMTU0RUE2OTExRTg5RjMzOTIzQjdFNjlBMDlEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTRBNTIwQjhFQTU1MTFFOEEyMjFBNTUzMDhBQkFDODciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTRBNTIwQjlFQTU1MTFFOEEyMjFBNTUzMDhBQkFDODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAGACgDAREAAhEBAxEB/8QAdgAAAgMAAAAAAAAAAAAAAAAABAUGBwoBAAIDAQAAAAAAAAAAAAAAAAMFBAYHCBAAAgIBAwQCAwAAAAAAAAAAAQIDBBEFBgcAIRIIIhQxExYRAAICAAUEAgIDAAAAAAAAAAECEQMAIVEEBTFBEiJhE4EGoUJi/9oADAMBAAIRAxEAPwDXtJyPykf2rpnrpGoFey8Muq8mbEJayiM1SGSGlquBHMV8XYP8CwwCAT1u13C8OigtzLvYXUEJtrwAv9mllmR2WM4MkGMcz17vYO/vtPBApPtahJbOFAXoD3acuwOeAtI5S53NSi+s+r2mJckrq1+HSuWNhmOCy0hBige5q58o0iwSxLfLIAIx0TccD+rC+xKOeuNCsQjNtLpYR1KhRBJyjSCcRxv6DQjvsEFxUeSi4QpnoCSZgQZ1kaYlF3kbldVqS6f68OVZ0S3Vm3/xzPYU4zJJDP8A1GnwCDvhGIeQkHMYGD1Vn4+n7nrr381AHxdq7lnQeIrcg65xocOqW/WBtg+6V/uJzVYYDU+RZARplPxGF1TkbnIWZfveu+mtTjsqsRp8hbGS3ZpuFYSMJtyyRVLEQyrLmVWOCDjPTROJ4B6kLctalxX2BotZVb4ISXU9RkpGc4XXbniELirbB0B9D5gFh/oE+pHeCwxa1bd2ryxV3m4p1yrLN5CWA7j2DN9TC+QMssW5fCVHPYGPyOfyAO/S2zi9srFU5Otk1+ncCfwa5GBjccQw8jQytoXQ/wAgxj//2Q==",
				definitiveURL: "files/header1920.jpg", 
				media: "(min-width: 1280px)"
			},
			{
				temporalURL: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgwQjAyOUQzRUE2OTExRTg5MjE2REI2RkEwQkVFNUMyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgwQjAyOUQyRUE2OTExRTg5MjE2REI2RkEwQkVFNUMyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTJDRUVEQzVFQTU2MTFFODg2RkM5MjlDNzBDMEFDOUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTJDRUVEQzZFQTU2MTFFODg2RkM5MjlDNzBDMEFDOUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAJACgDAREAAhEBAxEB/8QAjAAAAgMBAAAAAAAAAAAAAAAABQYEBwkKAQABBQEAAAAAAAAAAAAAAAAEAgMFBgcIEAABBAADBQUJAAAAAAAAAAACAQMEBQARBiESNgcIMrITs3UzcxQkNHS0FXYRAAECBAMECgEFAAAAAAAAAAECBAARAwUhMUESczUGUWFxscEiMrITNFJygsJ0Ff/aAAwDAQACEQMRAD8A64p3Vl081OpYOl5s7UQy5zbr4TmtMy3a5lhpR+ZkGJrKbjGirkfhLu5LvoOzPd2/I3Oby11bvQTQLSkoJM6oCio5BIOZ6tZiROMuanH+E1fU7bXqKDuqkqACCQB0qOQHSTiNRB+F1RdN0lS3tYfB7jjjRrZU8+KoPMqgutEyTJSBMFJF7GSouaKqYaPIfPSk7VOgmp5QryVEmaVYgjIEHqOEsZQ1UqcuI9bjZMyMUEYjMHMgjsx0nDNI588j24rUuu1E1ftutOPr+igyZngMtLuuOTHXgjMQ0EtmThIu1NmSpisO7dfWNctnqDTrhQElKBMzkBskznE6w5ebXKkK7VaVNyCQrECQzJmARLshdtOprkxUV62UsbhWGSIJ7cWFXTX64wJpDCSEOykCpgjwkogpEI7VRFRUwTbrJfLo7DJsUprL9G2VUwuc5SK0jORAJkCcJwh9YGNvbKduVpNJHq2D8hTlmEAnUEgYy0idVdSPJKyejg5aP1kaWQjGsp8MAgug4e428RNOuSmmCPYpk0gAvaVM0VZBXJ3Ng2koQlddOaErBUJCZH4k9QUSdIjVt7CmmKvzp+E5KIIBxkDIgKlPUjDWMOdQcU0v89K7snHTNs4E5/tI/jFQuXFaO4X4wPa+urPfQPJLBbnhrnd1fdAdH7zfeUvbDFrzhfWvpld3Y+MmtXE2O9X3mNIuH0Hm5T4RSvLb2EP0ew/LnYvF6zrb9HcmKjasqO4X3qi3R4grvtYPkM4Uw4Yf1L9xgV998fs9oj//2Q==",
				definitiveURL: "files/header1280.jpg", 
				media: "(min-width: 570px)"
			},
			{
				temporalURL: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFODEyQTc3RUE2OTExRThCNEUzOUU2NUEzOUNFMTlBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFODEyQTc2RUE2OTExRThCNEUzOUU2NUEzOUNFMTlBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdDMzgwMDZFQTU2MTFFODlDNzlDQkJFRjdDOURCMDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDMzgwMDdFQTU2MTFFODlDNzlDQkJFRjdDOURCMDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAVACgDAREAAhEBAxEB/8QAjwAAAgEFAAAAAAAAAAAAAAAAAwYHBAUICQoBAAEEAwEAAAAAAAAAAAAAAAIDBQYHAAQIARAAAgIBAgMFBgcAAAAAAAAAAQIDBAURBgAhEjFBEwcIYSJCFBUWUXGBscHRMhEAAgEDAwIEBQMFAAAAAAAAAQIREgMEACEFExQxQRUGUWFxIwciMkLwwVIzJP/aAAwDAQACEQMRAD8A7XUweuhKafkun8nt4tY8gfjrmP06R4b6qkwQPw8uzmOf98ItyPlOh9Ojw/voowSj4FbXv1I0/QanXgDyPzOsOBPgNtFGDUdiD8OfVp+2vAeofM6z09f6nRVwSnkUA7+/u7h7OAPIEmdeHAWY3mNRDf8AUX5M4mqtu55l7akiYsIkovayNmcqwUrBWqVpJZGUn2DiS2fY/ufLu9Czx+RXG9UKB8ySdhqS3uU9u2E6l3LtUE7RJn6QNWSr6rfJm9BkJ6O4cpOMbWezMtjbmSoCRQeiFIZbKLG5tzEJH2szEaKeCzvYHuXjgnd2LYa64VQt1XJPiRA3FI3YmFUblhpPB5TgeRd1xbrEWxLlkZQo+O/jJ2UCSSYA1E+7fXXtnak2Fqy7JvwZG2yJuPEZrO0ocjs9bfWcXbyP0iLI1p6tyOPqlWNjPUVgZE1DJw+cJ+KeU523eyMTIR8NFJs3baNRklI6iW6ypDLMKzAJcIIUwQ2tDlOf4rh7luxnK1vLZgLlsspewrA0PcpqEHYsqksimWEgjT1t71qeUmY2yNw2Y9zYexFLPHcwsuLW9PW8F1WGyL1WQV5quRVw8HuiULydFYHhszvxnz2Hyo4pnxmdgKXrKqSZqWCNjbgh948wSDrYxeY4fK45uSC3ltLMrTU20AGBEh5lBFXjIEaYsd6t/KzLBpMPJmMrXjkSGWxj6SSrHM8YkCeDIYrDdK9p0ADAjt4SufjXn7LizlPjWchgSqXLgUsAY2O4+gncGdH6vwrWzetG/dsLALJacgEiQPAGPImIBEfPWonOFvHqfUFx3yYgw5mOCdvDaj1gotcSJ8ul4x6icqWPVqWGvLjpHi+rQ5wOp3nUu0i//nG5YiWKT+wEAeQMb6rXkqetb7wp23StT0R/CdgoJpDx+4gn4sJ2027bl3F9z51tr0aXyhz052zEuVsdEcZpSDDpjrGfw3RNOtgTGs1yKOUyMRXUIqs0A5ZMX07HHM3L3edv/wBBa2JJ6n3C4tXNkppDi2xWIN01EgTri2vd3ePDpa7XrDoBXMAU/ooNy3uapKm4A1WyCkScdPMlqxyeH6Yp0hG1KghNifIS32pkz9LZwWK0JTMJkPHJVC0LLy1VOg8W57NGeMXJkoX781UhBbqhdrNLGbRt0STDAxAJkarT3ScE37GzAdptJYvTLf7ZAi51KthKkbSBB1JeL+4T9v8A0kYKPMh63hiwbEtx18L3hMbYhpR6Yfo/0HkKdOnvcQfkPThcy/U+5PHw1UUhRv5US5HVnwgTM/p1KcT1Apjdj0BnytM1En61Qg+3HxMR/LS5EMp022ovljSafIrYiwkbKkOgrmWalPWlaWzE9sqJ4pI4kWUApIxLgPk4/wBoZYxu6C2yhvESd2pVwwhWCybbKzMVJDoAFJaVFz7pwzkdpNyoWgYA2koQZK1RWrBQDFLEkgf/2Q==",
				definitiveURL: "files/header570.jpg",
				media: "(min-width: 360px)"
			},
			{
				temporalURL: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREREUyRUNGRjcyOTExRTg4Nzc0RTMxN0MyNzBCMDlDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREREUyRUNFRjcyOTExRTg4Nzc0RTMxN0MyNzBCMDlDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEJBQjI0OTVGNzI3MTFFODg5QTdFMDEwQzZGNjBEM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEJBQjI0OTZGNzI3MTFFODg5QTdFMDEwQzZGNjBEM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAUEBAZEhknFxcnMiYfJjIuJiYmJi4+NTU1NTU+REFBQUFBQUREREREREREREREREREREREREREREREREREREREARUZGSAcICYYGCY2JiAmNkQ2Kys2REREQjVCRERERERERERERERERERERERERERERERERERERERERERERERERET/wAARCAAhACgDASIAAhEBAxEB/8QAaQABAAMBAQEAAAAAAAAAAAAAAAECBQQDBgEAAwEAAAAAAAAAAAAAAAAAAQIDABAAAgECBQMFAAAAAAAAAAAAAAERMQJBEjIDBCFRcWGBkSIUEQEBAQEBAQAAAAAAAAAAAAAAEQFBEgL/2gAMAwEAAhEDEQA/APq4EFgUqEVgQXAK0UgF4Bq0c37Nru/gX8pJLKszeBn3LI1b6T4LO5tfWrxK784ObvXRu8126YlVVSbOem4up3RnbuqVQnbiOo3jIT1tar5liBm51SoF8YavO6pNmteQCnCKMm2oA3AWdfYACi//2Q==",
				definitiveURL: "files/header360.jpg"
			}
		];
		this.state = { srcSet, alt: "background", collapseMenu: false, selectedCategory: 0 };
	}

	render() {
		return (
			<div className = { `${styles.animated} ${styles.outer} ${this.state.collapseMenu ? `${styles.collapsed} ${styles.absolute}` : '' }`}>
				<ResponsivePicture pictureClass={ styles.header } imgClass={ `${styles.backgroundImage} ${this.state.collapseMenu ? styles.collapsed : ''}` } 
					sources={ this.state.srcSet } alt={this.state.alt} />
				<div className={ styles.logoContainer }>
					<img alt="logo" src="files/logos/logo.svg" className={ `${styles.logo} ${styles.animated} ${this.state.collapseMenu ? styles.collapsed : ''}` }></img>
				</div>
				<nav>
					<div className={ `${styles.menuContainer} ${styles.animated} ${styles.navWide} ${this.state.collapseMenu ? styles.collapsed : ''}` }>{ this.props.showNavItems && this.renderNavItems() }</div>
					<div className={ `${styles.menuContainer} ${styles.animated} ${styles.navNarrow} ${this.state.collapseMenu ? styles.collapsed : ''}` }>
						<i className={`fa fa-bars fa-2x ${this.state.collapseMenu ? styles.burguerRight : ''}`} onClick={this.burgerToggle}></i> <br />
						<div className={styles.navNarrowLinks}>
							{ this.props.showNavItems && this.renderNavItems() }
						</div>
					</div>
				</nav>
			</div>
		);
	}

	renderNavItems() {
		let index = 0;
		const navs = [<div key={ index } className={ styles.menuItem } onClick={() => this.navItemClicked(0)}><a className={ (this.state.selectedCategory === 0) ? styles.selectedNav : "" } href="#all">All</a></div>];
		for(let categoryName in Categories) {
			const current = Categories[categoryName];
			if(current.invisible)
				continue;

			index++;
			const isSelected = (current.key === this.state.selectedCategory);
			navs.push(<div key={ index } className={ styles.menuItem } onClick={() => this.navItemClicked(current.key)}><a className={ isSelected ? styles.selectedNav : "" } href={`#${current.link}`}>{current.name}</a></div>);
		}
		return navs;
	}

	navItemClicked(categoryId) {

		this.props.menuOptionClickHandler(categoryId);
		this.setState(() => { return { selectedCategory: categoryId, collapseMenu: false } });

	}

	burgerToggle() {
		let linksEl = document.querySelector(`.${styles.navNarrowLinks}`);
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

	componentDidMount() {
		document.addEventListener("scroll", this.scroll.bind(this));
		this.offsetPage = document.getElementById("introPage");
	}

	componentDidUpdate() {
		this.offsetPage = document.getElementById("root").children[0].children[2];
	}

	scroll() {
		const oldCollapseMenuStatus = this.state.collapseMenu;
		let shouldCollapse = false;
		const offset = (this.state.selectedCategory === 0) ? this.offsetPage.offsetTop + this.offsetPage.offsetHeight : 300;

		if(window.scrollY > ( offset - 300)) {
			shouldCollapse = true;
		}
		
		if(oldCollapseMenuStatus !== shouldCollapse) {
			this.setState(() => { return { collapseMenu: shouldCollapse } });
		}

	}

}

export default Menu;