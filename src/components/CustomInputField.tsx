import { Text, TextInput, View } from "react-native"
import { profileStyles } from "./Styles"

type Propos={
placeHolder:string
setData:Function
value:string
showError:Boolean
// setError:Function
}

const CustomTextInput=(props:Propos)=>{
    return(
        <View style={profileStyles.fieldView}>
        <View style={[profileStyles.inputView,{ borderColor: props.showError ? 'red' : 'transparent'}]}>
        <TextInput   
        placeholderTextColor="#AFAFAF" 
        style={profileStyles.inputText} 
        placeholder={props.placeHolder} 
        value={props.value} 
        onChangeText={(text)=>props.setData(text)}
        // onFocus={props.setError(false)}
        />
        </View>
        {props.showError && <Text style={{color:'red',alignSelf:'flex-start',marginTop:5,marginLeft:15}}>Error</Text>}
        </View>
     
    )
}
export default CustomTextInput