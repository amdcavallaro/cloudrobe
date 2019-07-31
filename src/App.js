import React from "react";
import Router from './routes/Router';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
	return (
		<AppWrapper>
			<Router />
		</AppWrapper>
	);
};

export default App;
