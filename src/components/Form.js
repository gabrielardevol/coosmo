import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles/stylesheet';
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

export default Input