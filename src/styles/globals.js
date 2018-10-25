import { createGlobalStyle } from "styled-components";

const SetGlobalStyles = createGlobalStyle`
		@import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700');

		* {
			box-sizing: border-box;
		}

		html,
		body {
			font-family: 'Titillium Web', sans-serif;
			width: 100vw;
			min-height: 100vh;
			overflow: hidden;
			margin: 0;
			padding: 0;
		}
	`;

export default SetGlobalStyles;
