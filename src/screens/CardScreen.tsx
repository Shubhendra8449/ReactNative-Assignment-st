import { FlatList, Image, Text, View } from "react-native";

const placeholderImage = 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g';
const data = [
  { id: 1, name: "Inception", year: 2010, image: "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g" },
  { id: 2, name: "Interstellar", year: 2014, image: "https://media.istockphoto.com/id/1458791527/photo/system-hacked-warning-alert-man-using-smartphone-with-cyber-attack-network-virus-spyware-scam.jpg?s=1024x1024&w=is&k=20&c=0VRIzYcryQ2Wg00NfwAOx7tNNCcm3XItD1GA9EPX3RU=" },
  { id: 3, name: "Dunkirk", year: 2017, image: "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g" },
];

const CardScreen=()=>{
    return(
        <View style={{flex:1,marginBottom:20}}>
              <FlatList
        data={data}
        renderItem={({ item }) => <View>
          <Text style={{color:'black',fontSize:20,alignItems:'center',alignContent:'center',alignSelf:'center',marginTop:20}}> {item.name}</Text>
          <Image
            source={{ uri: item.image }}
            style={{ height: 300, width: 300, borderRadius: 15,alignSelf:'center' }}
            onError={() => placeholderImage}
          />
        </View>}
        keyExtractor={(item) => item.id.toString}
      />
        </View>
    );
}
export default CardScreen