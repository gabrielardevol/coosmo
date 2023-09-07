import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "red" }} >
        <View style={{backgroundColor: "green", alignItems: 'flex-end'}}>
    
        </View>
  
        <View style={{backgroundColor: "purple", flex: 1,  alignItems: 'center', justifyContent: "center"}}>
        <Text>Home Screen (options: headerShown: false)</Text>
        </View>
      </View>
    );
}

export default HomeScreen;
