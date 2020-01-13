import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: #fafafa;
	border: 2px solid #000;
	color: #2a2a2a;
	cursor: pointer;
	font-size: 20px;
	font-weight: 700;
	max-width: 300px;
	outline: none;
	padding: 10px 20px;
	text-transform: uppercase;

	${props =>
		props.primary &&
		css`
			background: orange;
		`}
	${props =>
		props.alert &&
		css`
			background: red;
		`}
`;

export default Button;
