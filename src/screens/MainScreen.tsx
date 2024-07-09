import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from 'react';
import CardScreen from './CardScreen';
import CounterScreen from './CounterScreen';
import ProfileScreen from './Profile';







const MainScreen = ({navigation}) => {

    const renderScene = SceneMap({
        counterScreen: () => <CounterScreen navigation={navigation}  />,
          cardScreen: CardScreen,
          profileScreen: ProfileScreen
        });
        
    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = useState([
      { key: 'counterScreen', title: 'Counter' },
      { key: 'cardScreen', title: 'Cards' },
      { key: 'profileScreen', title: 'Profile' }
    ]);
  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
     
    );
  }
  export default MainScreen
  