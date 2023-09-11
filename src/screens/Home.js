import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "red" }} >
//         <View style={{backgroundColor: "green", alignItems: 'flex-end'}}>
//         </View>
//         <View style={{backgroundColor: "pink", flex: 1,  alignItems: 'center', justifyContent: "center"}}>
//         <Text>Home Screen (options: headerShown: false)</Text>
//         </View>
//       </View>
//     );
// }

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
        name="Hamburguer"
        component={HomeHamburguer}
        options={{
          title: 'Hamburguer Screen',
        }}
      />
    </Drawer.Navigator>
  );
}



function HomeHamburguer({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "red" }} >
      <View style={{backgroundColor: "green", alignItems: 'flex-end'}}>
  
      </View>

      <View style={{backgroundColor: "purple", flex: 1,  alignItems: 'center', justifyContent: "center"}}>
      <Text>Home Hamburguer (options: headerShown: falsssse)</Text>
      </View>
    </View>
  );
}


export default HomeDrawer;
