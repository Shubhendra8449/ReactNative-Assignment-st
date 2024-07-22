import { ActivityIndicator, Alert, FlatList, Image, Linking, LogBox, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getApiCall } from '../service/Service';
import { ApiStyles } from '../components/Styles';

const storybookApp: Boolean = false;

type Article = {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: Source,
  title: string,
  url: string,
  urlToImage: string
};
type Source = {
  id: any,
  name: String

}



const ApiCallScreen = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Article[]>([]);


  const openURI = async (url: string) => {

    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));

  }

  const getArticles = async () => {
    try {
      const response = await getApiCall();
      setData(response.articles);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={ApiStyles.container}>

          {data.length > 0 ? (
            <FlatList 
              data={data}
              renderItem={({ item }) => (
               
                  <View style={ApiStyles.FlatBoxContainer}>
                      <Image
                        source={{ uri: item.urlToImage }}
                        style={ApiStyles.image}
                      />
                      <View style={ApiStyles.textContainer}>
                        <Text style={ApiStyles.name}>{item.title}</Text>
                        <Text style={ApiStyles.detail} numberOfLines={5} onPress={() => openURI(item.url)}>{item.description}</Text>
                      </View>
                </View>
              )}
              keyExtractor={(item) => item.author}
            />
          ) : (
            <View style={ApiStyles.placeholderContainer}>
              <Text style={ApiStyles.placeholderText}>The list is empty. Please select data from the next screen.</Text>
            </View>
          )}
        </View>

      )}
    </SafeAreaView>
  );
};
export default ApiCallScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

function setError(message: any) {
  throw new Error('Function not implemented.');
}

