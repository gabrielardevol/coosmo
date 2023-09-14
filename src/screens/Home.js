import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingStack from './Landing';

const Drawer = createDrawerNavigator();

  import { WebView } from 'react-native-webview';

  function HomeScreen() {
    return (
    <WebView
      source={{ uri: 'https://orbits-frontend.vercel.app/' }} // or use 'html' property for inline HTML
      style={{ flex: 1 }} // adjust the style as needed
    />
    );
  };

function HomeDrawer() {
  return (
    <Drawer.Navigator  screenOptions={{
      drawerPosition: "left"}
      }>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'orbitas',
          headerTitle: ''
        }}
      />
      <Drawer.Screen
        name="Landing stack"
        component={LandingStack}
        options={{
          title: 'Landing stack',
        }}
      />
    </Drawer.Navigator>
  );
}



export default HomeDrawer;
