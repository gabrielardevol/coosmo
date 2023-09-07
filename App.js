import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons'; // Import icons (use your preferred library)
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library

import HomeScreen from './src/screens/Home'; // Replace with the correct path to your component
import ChatScreen from './src/screens/Chat'; // Replace with the correct path to your component
import ProfileScreen from './src/screens/Profile'; // Replace with the correct path to your component


// function ChatScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Chat Screen </Text>
//     </View>
//   );
// }

function HomeStack() {
  return (
    <View></View>
  )
}

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "red" }} >
//       <View style={{backgroundColor: "green", alignItems: 'flex-end'}}>
  
//       </View>

//       <View style={{backgroundColor: "purple", flex: 1,  alignItems: 'center', justifyContent: "center"}}>
//       <Text>Home Screeen (options: headerShown: falsssse)</Text>
//       </View>
//     </View>
//   );
// }

function HomeHamburguerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "red" }} >
      <View style={{backgroundColor: "green", alignItems: 'flex-end'}}>
  
      </View>

      <View style={{backgroundColor: "purple", flex: 1,  alignItems: 'center', justifyContent: "center"}}>
      <Text>Home Screeen (options: headerShown: falsssse)</Text>
      </View>
    </View>
  );
}

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Profile Screen </Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator  initialRouteName="Home">
          <Tab.Screen name="Chat" component={ChatScreen} 
            options={{
         
            tabBarLabel: 'Chat', // Tab label
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" size={size} color={color} /> // Icon for Home tab
              ),
            }}
          />
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              headerTitle:  '',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.button}
                  // onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={styles.buttonText}>
                    <Icon name="bars" size={30} color="black" />
                    {'  '}
                  </Text>
                </TouchableOpacity>
              ),            
              tabBarLabel: 'Home', // Tab label
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="planet-outline" size={size} color={color} /> // Icon for Home tab
              ),
            }}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
            tabBarLabel: 'Profile', // Tab label
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} /> // Icon for Home tab
              ),
            }}
            />
        </Tab.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
