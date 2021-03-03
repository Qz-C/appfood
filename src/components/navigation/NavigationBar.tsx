import React from "react";

import { Home } from "../../screens";

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from "../../constants";
import NavigationButton from "../navigation/NavigationButton";


interface Props {

}

const tabs: string[] = [
    "restaurant",
    "search",
    "favorite",
    "person"
]

const Tab = createBottomTabNavigator();

const NavigationBar: React.FC<Props> = (props) => (
    <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                backgroundColor: COLORS.transparent,
                elevation: 0,
                borderTopWidth: 0
            }
        }}
    >
        {tabs.map((IconName: string, index:number) => (
            <Tab.Screen
                key={index}
                name={IconName}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={IconName}
                            size={25}
                            color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    ),
                    tabBarButton: (props: any) => (
                        <NavigationButton
                            {...props}
                        />
                    )
                }}
            />
        ))}
    </Tab.Navigator>
);

export default NavigationBar;