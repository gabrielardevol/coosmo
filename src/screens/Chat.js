import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

function ChatScreen() {
  const chats = [
    {name: "Gemma", message: "Holiii", color: "green"},
    {name: "Norman", message: "Entiendo lo que dices, pero...", color: "blue"},
    {name: "Javi", message: "Hahaha que guay", color: "pink"},
    {name: "Ornella", message: "Qué bueno", color: "turquoise"}


  ]
    return (
      <View>
      {chats.map((element, index) => {
        return (
          <View style={styles.chatContainer}>
          <View  style={{...styles.pfp,     backgroundColor: element.color}} />
            <View>
              <Text key={index} style={{fontSize: 22}}>{element.name}</Text>
              <Text key={index} >{element.message}</Text>
            </View>
          </View>
    
        );
      })}
      </View>
    );
  }

  
const styles = StyleSheet.create({
  chatContainer: {     
    flexDirection: "row", 
    alignItems: "center", 
    borderBottomWidth: 1, 
    borderBottomColor: "grey",
    marginTop: 5, 
    marginRight: 20, 
    marginLeft: 20
},
 pfp: {
    width: 60,
    height: 60,
    borderRadius: 40,
    margin: 15
  },})
export default ChatScreen;
