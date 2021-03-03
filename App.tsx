import React from 'react';
import { Home, OrderDelivery, Restaurant } from "./src/screens"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from "./src/components/navigation/NavigationBar";

export interface Props {

}

const Stack = createStackNavigator();

const App: React.FC<Props> = (props) => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="Home" component={NavigationBar}/>
			<Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
			<Stack.Screen name="Restaurant" component={Restaurant}/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default App;
