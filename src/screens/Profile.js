import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import pfpImage from '../../assets/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
// import { TouchableOpacity } from 'react-native-gesture-handler';


function ProfileHashtags() {
  const hashtags = ["Pizza", "Series", "Música", "Playa", "Montaña"];
  return (
    <View>
      <Text style={styles.h2}>Hashtags</Text>
      <View style={styles.hashtagContainer}>
        {hashtags.map((tag, index) => (
          <Text style={styles.hashtag} key={index}>
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );
}

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.profileImageContainer}>
          <Image source={pfpImage} style={styles.profileImage} />
          <View style={styles.editButton}>
            <FontAwesomeIcon icon={faPen} size={28} />
          </View>
        </View>
        <Text style={styles.profileName}>Manolo, 73</Text>
        <View style={styles.buttonRow}>
          {/* <TouchableOpacity>
            <View style={styles.button}>
              <Text>Touch Here</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.aboutMe}>
        <Text style={styles.sectionTitle}>
          Acerca de ti
          <FontAwesomeIcon icon={faPen} />
        </Text>
        <Text style={styles.aboutMeText}>
          Mmmme encanta la variedad en todas las fotos de aquí. Es como un libro del Dr. Seuss: Un pez muerto, dos peces muertos, pez rojo muerto, pez azul muerto.
        </Text>
        <ProfileHashtags />
        <ProfileHashtags />
        <ProfileHashtags />
        <ProfileHashtags />

        <ProfileHashtags />
        <ProfileHashtags />
        <ProfileHashtags />
        <ProfileHashtags />
        <ProfileHashtags />
        <ProfileHashtags />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'blue',
    borderRadius: 5000,
  },
  editButton: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    backgroundColor: 'gainsboro',
    borderRadius: 50,
    position: 'absolute',
    bottom: -10,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 40,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'red',
  },
  aboutMe: {
    flex: 1,
    margin: 10,
  },
  sectionTitle: {
    color: 'blue',
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
  },
  aboutMeText: {
    fontSize: 17,
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    gap: 10,
  },
  hashtag: {
    backgroundColor: 'grey',
    color: 'white',
    padding: 10,
    borderRadius: 12,
  },
  h2: {
    fontSize: 30,
  },
});

export default ProfileScreen;
