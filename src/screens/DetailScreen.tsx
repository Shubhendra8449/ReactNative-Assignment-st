import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../components/Styles';


const DetailsScreen = ({ navigation, route }) => {


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

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', marginTop: 20, }}> {localCounter}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={incrementCounter}>
          <Text style={{ color: 'white' }}>  Increase  Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrementCounter}>
          <Text style={{ color: 'white' }}>  Decrease  Counter</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.DetailButton} onPress={navigateToPrevious}>
        <Text style={{ color: 'white' }}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
