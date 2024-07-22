import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import MainScreen from "../screens/MainScreen";
import CounterScreen from "../screens/CounterScreen";
import ApiCallScreen from "../screens/ApiCallScreen";
import LoginScreen from "../../sr/screens/LoginScreen";
import Login from "../modules/screens/Login";



const Stack = createNativeStackNavigator();

const Routes = () => {
  const [counter, setCounter] = useState(0)
  return (

 

   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        {/* {props => (<MainScreen {...props} counter={counter} setCounter={setCounter} />)} */}

        <Stack.Screen
          name="Detail"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ApiCallScreen"
          component={ApiCallScreen}
          options={{ headerShown: false }}
        />
              <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default Routes;