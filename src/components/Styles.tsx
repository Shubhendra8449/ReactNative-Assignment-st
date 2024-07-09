import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: "row", // Arrange buttons horizontally
    justifyContent: "space-between", // Space evenly between buttons
    marginVertical: 60,
    paddingHorizontal: 30
  },
  button: {
    height: 40,
    width: 150,
    borderRadius: 17,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  DetailButton: {
    height: 40,
    width: 150,
    marginTop: 200,
    borderRadius: 17,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center", // Center horizontally

  },
  buttonText: {
    color: 'white',
  },
});

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center items horizontally 
    alignItems: 'center', // Center items vertically  (| | |)
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  fieldView: {
    width: '80%'
  },
  inputView: {
    width: '100%',
    backgroundColor: '#EAEAEA',
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    padding: 20,
   
    borderWidth: 2
  },
  inputText: {
    height: 50,
    color: '#777777',
    fontWeight: '800'
  },
  singUp: {
    color: '#39B54A',
    fontWeight: '500',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#39B54A',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginTop: 0,
  }

});


export { styles, profileStyles };