import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: #fafafa;
	border: 2px solid #000;
	border-radius: 0.4rem;
	color: #2a2a2a;
	cursor: pointer;
	font-size: 12px;
	font-weight: 700;
	margin-bottom: 10px;
	margin-top: 20px;
	max-width: 300px;
	outline: none;
	padding: 15px 50px;
	text-transform: uppercase;

	${props =>
		props.primary &&
		css`
			background: orange;
		`}
	${props =>
		props.alert &&
		css`
			background: #ad0000;
			border: 1px solid #fff;
			color: #fafafa;
			:hover {
				background: #ff0055;
			}
		`}
`;

export default Button;
