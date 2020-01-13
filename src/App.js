import React from 'react';
import ResetStyles from './components/common/ResetStyles';
import MainContainer from './components/containers/MainContainer';
import HeadingOne from './components/typography/HeadingOne';
import Button from './components/common/Button';

function App() {
	return (
		<div>
			<ResetStyles>
				<MainContainer>
					<HeadingOne>Heading One Component.</HeadingOne>
					<Button>Go for It</Button>
				</MainContainer>
			</ResetStyles>
		</div>
	);
}

export default App;
