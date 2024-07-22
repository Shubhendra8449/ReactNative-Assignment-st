import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../components/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import increaseCount from "../redux/action";




const CounterScreen = ({ navigation }) => {
  
const dispacter=useDispatch();
const counterData=useSelector((state)=>state.counter)


  // useEffect(() => {
  //   const loadCounter = async () => {
  //     try {
  //     const data= await AsyncStorage.getItem('num');
  //     console.warn(data)
    
  //     } catch (e) {
  //       console.error('Failed to load the counter.', e);
  //     }
  //   };

  //   loadCounter();
  // }, []);

  // const saveCounter = async () => {
  //   try {
  //     await AsyncStorage.setItem('num', counter.toString());
  //   } catch (e) {
  //     console.error('Failed to save the counter.', e);
  //   }
  // };

  

 



  const goToDetailScreen = () => {
    navigation.navigate('Detail');
  };


  //using callback function

  // const [counter, setCounter] = useState(0)

  // const handleCallback = (cou) => {
  //   setCounter(cou)
  // };

  // const goToDetailScreen = () => {
  //   dispacter(increaseCount(counter))
  //   navigation.navigate('Detail', { counter, callback: handleCallback });
  //   navigation.navigate('Detail');
  // };

  // const increaseCounter = () => {
  //   setCounter(counter + 1);
  // };

  // const decreaseCounter = () => {
  //   setCounter(counter - 1);
  // };
  return (

    <View style={{ height: '70%' }}>
      <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', marginTop: 20, }}> {counterData}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={ ()=> dispacter(increaseCount(counterData+1))}>
          <Text style={{ color: 'white' }}>  Increase  Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> dispacter(increaseCount(counterData-1))}>
          <Text style={{ color: 'white' }}>  Decrease  Counter</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.DetailButton} onPress={goToDetailScreen}>
        <Text style={{ color: 'white' }}> Detail Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.DetailButton} onPress={()=>navigation.navigate('Login')}>
        <Text style={{ color: 'white' }}> Api Screen</Text>
      </TouchableOpacity>
    </View>
  );

}
export default CounterScreen