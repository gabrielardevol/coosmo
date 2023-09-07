import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons'; // Import icons (use your preferred library)

function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen </Text>
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "red" }}>
      <View style={{backgroundColor: "green", alignItems: 'flex-end'}}>
        <Button
          title="Go to chat"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>

      <View style={{backgroundColor: "purple", flex: 1,  alignItems: 'center'}}>
      <Text>Home Screeen (options: headerShown: falsssse)</Text>
      <Button
        title="Go to chat"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>
    </View>

  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
{/* 
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} /> */}
        {/* </Stack.Navigator> */}

          
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
