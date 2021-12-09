import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
    return(
        <Tab.Navigator 
        tabBarOptions={ {labelStyle: { fontSize: 24 },
                        style: {backgroundColor: '#1B191B'},
                        activeTintColor: '#FFFFFF'} }
        >
        <Tab.Screen name="Início" component={RotasDrawer} />
        <Tab.Screen name="Objetivo" component={Perfil} />
        </Tab.Navigator>
    );
}

export default RotasTab