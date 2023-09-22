import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles/stylesheet';
import { useEffect } from 'react'
const Input = (props) => {
   
    return (
        <View style={{}}>
            {props.label && <Text style={{fontSize: 14, position: "absolute", right: 0, backgroundColor: "yellow"}}>{props.label}</Text>}
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.handleChange(props.name)}
                value={props.Orbita[props.name]}
                style={{...styles.textInput, ...props.style}}
            />
        </View>
    )
}

export default Input