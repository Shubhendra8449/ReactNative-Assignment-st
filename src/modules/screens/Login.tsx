import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { profileStyles } from '../../components/Styles';
import CustomTextInput from '../../components/CustomInputField';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, saveLogin } from '../authAction';
// import { loginUser } from '../slice/authSlice';


const Profile = () => {
    const dispatch = useDispatch();
    const fetchLoginDetails = () => dispatch(loginUser("shubhendra8449@gmail.com", "Shubham@123"));
    const response = useSelector(state => state.auth);
    const syncData = useSelector(state => state.saveAuthReducer.isLogin);

    const addToBookmarkList = () => dispatch(saveLogin(true));


    
    // const { loading, data, error } = useSelector((state: RootState) => state.auth);

    // console.log("response","loading==  "+loading)
    // console.log("response","error==  "+error)
    //const data=JSON.stringify(response)
    // console.log("response" ,response?.data?.data?.accountStatus)
    console.log("response" ,syncData)




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);


  const validateUserInput = () => {
    // if (email.trim().length == 0) {
    //   setEmailError(true)
    // }
    // if (!ValidationUtils.isEmailValid(email)) {
    //   setEmailError(true)
    // } if (password.trim().length == 0) {
    //   setPasswordError(true)
    // } else {

    // }
    // fetchLoginDetails()
    addToBookmarkList()
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