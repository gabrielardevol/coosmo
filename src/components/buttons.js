import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles/stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
export const ArrowButton = (props) => {
    return (
        <TouchableOpacity 
        style={{...styles.button, width: 40, alignSelf: "center"}}
        onPress={props.onPress}        >

          <Text style={styles.buttonText}>
              <FontAwesomeIcon icon={faArrowRight} style={{position: "absolute", top: 42, right: 15, color: "white"}}/>
          </Text>
        </TouchableOpacity>
    )
  }
