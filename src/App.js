import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MainContainer from './components/containers/MainContainer';
import HeadingOne from './components/typography/HeadingOne';
import Button from './components/common/Button';

const GlobalStyle = createGlobalStyle`
  *, body, html, *::before, *::after {
	background-color: #2f2f2f;
	box-sizing: border-box;
    color: ${props => (props.orangeColor ? 'orange' : 'black')};
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
	font-weight: 300;
	line-height: 1.6;
	margin: 0;
	padding: 0;
  }
  p {
	  padding-top: 20px;
  }
`;

function App() {
	return (
		<div>
			<GlobalStyle orangeColor />
			<MainContainer>
				<HeadingOne>Heading One Component.</HeadingOne>
				<Button alert>Go for It</Button>
				<p>It is orange color, isn't it?</p>
			</MainContainer>
		</div>
	);
}

export default App;
