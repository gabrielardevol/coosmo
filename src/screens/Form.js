import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';


const Input = (props) => {
    return (
        <View>
            {props.label && <Text style={{fontSize: 14}}>{props.label}</Text>}
            <TextInput
                placeholder={props.placeholder}
            onChangeText={props.handleChange(props.name)}
            onBlur={props.handleBlur(props.name)}
            value={props.values[props.name]}
            style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    textInput: {backgroundColor: "white", borderColor: "navy", borderWidth: 1, borderRadius: 8, paddingLeft: 10 ,padding: 5}
  });

export default Input