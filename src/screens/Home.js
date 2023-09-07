import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: "red" }} >
        <View style={{backgroundColor: "green", alignItems: 'flex-end'}}>
    
        </View>
  
        <View style={{backgroundColor: "purple", flex: 1,  alignItems: 'center', justifyContent: "center"}}>
        <Text>Home Screen (options: headerShown: falsssse)</Text>
        </View>
      </View>
    );
}

export default HomeScreen;
