import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { profileStyles } from '../components/Styles';
import CustomTextInput from '../components/CustomInputField';
import { ValidationUtils } from '../validations/ValidationUtils';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);


  const validateUserInput = () => {
    if (email.trim().length == 0) {
      setEmailError(true)
    }
    if (!ValidationUtils.isEmailValid(email)) {
      setEmailError(true)
    } if (password.trim().length == 0) {
      setPasswordError(true)
    } else {

    }
  };

  return (

    <View style={profileStyles.container}>

      <CustomTextInput placeHolder={'Email'} setData={(value: string) => setEmail(value)} value={email} showError={emailError} 
      // setError={(isTrue:Boolean)=>setEmailError(true)}
       />

      <CustomTextInput placeHolder={'Password'} setData={(value: string) => setPassword(value)} value={password} showError={PasswordError} 
      // setError={(isTrue:Boolean)=>setPasswordError(false)}
       />

      <TouchableOpacity style={profileStyles.loginBtn} onPress={validateUserInput}>
        <Text style={profileStyles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={profileStyles.actions}>
        <TouchableOpacity style={{ marginHorizontal: 15 }}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={profileStyles.singUp}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


};







export default Profile