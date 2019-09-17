import React from "react";
import Router from './routes/Router';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/store';

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
	return (
		<Provider store={store}>
			<AppWrapper>
				<Router />
			</AppWrapper>
		</Provider>
	);
};

export default App;
