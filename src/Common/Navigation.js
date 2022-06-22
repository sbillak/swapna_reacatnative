import React, {createContext} from 'react';
import {Text} from 'react-native';
import {
    createStackNavigator,
  } from '@react-navigation/stack';
import {Dunks} from '../Pages/Dunks';
import {Nike} from '../Pages/Nike';
import {Jordans} from '../Pages/AirJordans';
import {Adidas} from '../Pages/Adidas';
import {Yeezys} from '../Pages/Yeezys';
import {Supreme} from '../Pages/Supreme';
const AppStack = createStackNavigator();
import {
    NavigationContainer,
    ParamListBase,
    DefaultTheme,
  } from '@react-navigation/native';
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'black',
    },
  };
export const Navigation = () => {
    return <NavigationContainer theme={MyTheme}>
        <AppStack.Navigator  screenOptions={{
    headerBackTitleVisible: false
  }}>
        <AppStack.Screen name="Dunks" component={Dunks} options={{headerLeft:()=><Text style={{borderWidth:1,borderColor:'white',fontSize:20,color:'white' ,paddingRight:5,paddingLeft:5}}>BLITZ</Text>,headerStyle:{backgroundColor: 'black'}}}/>
        <AppStack.Screen name="Nike" component={Nike} />
        <AppStack.Screen name="Jordans" component={Jordans} />
        <AppStack.Screen name="Adidas" component={Adidas} />
        <AppStack.Screen name="Supreme" component={Supreme} />
        <AppStack.Screen name="Yeezys" component={Yeezys} />
        </AppStack.Navigator>
    </NavigationContainer>
}