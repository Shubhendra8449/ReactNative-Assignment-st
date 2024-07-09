import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { CounterContext } from "../utils/CounterContext";
import { styles } from "../components/Styles";




const CounterScreen = ({ navigation }) => {



  const [counter, setCounter] = useState(0)

  const handleCallback = (cou) => {
    setCounter(cou)
  };

  const goToDetailScreen = () => {
    navigation.navigate('Detail', { counter, callback: handleCallback });
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (

    <View style={{ height: '70%' }}>
      <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', marginTop: 20, }}> {counter}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increaseCounter}>
          <Text style={{ color: 'white' }}>  Increase  Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decreaseCounter}>
          <Text style={{ color: 'white' }}>  Decrease  Counter</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.DetailButton} onPress={goToDetailScreen}>
        <Text style={{ color: 'white' }}> Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );

}
export default CounterScreen