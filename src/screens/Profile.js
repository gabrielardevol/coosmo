import { StyleSheet, Text, View, Image } from 'react-native';
import pfpImage from '../../assets/favicon.png'
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.container, { width: 200, height: 200 }]}>
      <Image source={pfpImage} style={styles.image} />
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: 'red',
    borderRadius: 5000

  },
});

export default ProfileScreen;
