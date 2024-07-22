import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../components/Styles';
import { useDispatch, useSelector } from 'react-redux';
import increaseCounter from '../redux/action';


const DetailsScreen = ({ navigation, route }) => {

  const dispacter=useDispatch();
  const counterData=useSelector((state)=>state.counter)



  //using callback function.
/*
  const { counter, callback } = route.params;
  const [localCounter, setLocalCounter] = useState(counter);


  const incrementCounter = () => {
    setLocalCounter(localCounter + 1);
  };

  const decrementCounter = () => {
    setLocalCounter(localCounter - 1);
  };

  const navigateToPrevious = () => {
    callback(localCounter)
    navigation.goBack()
  }

  */

  //useEffect,meme and callback code
//  useEffect(()=>{
//     console.warn("useEffect")
//     return ()=>{console.warn("unmount")}
//   },[])
/*
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    return num * 2;
  };
  const [count, setCount] = useState(0);
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);
*/

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', marginTop: 20, }}> {counterData}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={ ()=> dispacter(increaseCounter(counterData+1))}>
          <Text style={{ color: 'white' }}>  Increase  Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ ()=> dispacter(increaseCounter(counterData-1))}>
          <Text style={{ color: 'white' }}>  Decrease  Counter</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.DetailButton} onPress={()=>  navigation.goBack()}>
        <Text style={{ color: 'white' }}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
