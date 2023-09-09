import { StyleSheet, Text, View, Image } from 'react-native';
import pfpImage from '../../assets/favicon.png'


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'



function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View >
        <View style={[styles.container, { width: 150, height: 150 }]}>      
          <Image source={pfpImage} style={styles.image} />
        </View>
      {/* <Image source={pfpImage} style={styles.imageButton} /> */}
      <View style={[styles.imageButton, { width: 50, height: 50 }]}>   
        <FontAwesomeIcon icon={ faPen } size={ 28 } />   
      </View>


      </View>


      <View style={{ flex: 1 }}>
        <Text>Hola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50, // Set this value to half of the width and height for a perfect circle
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'red',
    borderRadius: 5000
  },
  imageButton: {
    flex: 1,
    width: 60,
    height: 60,
    resizeMode: 'contain',
    backgroundColor: 'gainsboro',
    borderRadius: 50,
    position: 'absolute',
    bottom: -10,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center'

    
    
  }
});

export default ProfileScreen;
