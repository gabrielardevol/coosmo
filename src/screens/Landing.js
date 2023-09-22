import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { Formik } from 'formik';

import Input from '../components/Form';
// import SignupScreen1 from './Signup';
// import SignupScreen2 from './Signup';
// import SignupScreen3 from './Signup';
import { SignupScreen1, SignupScreen2, SignupScreen3 } from './Signup';
import { styles } from '../styles/stylesheet';

const Stack = createStackNavigator();

const LandingStack = () => {
  return (
    <NavigationContainer independent="true">

    <Stack.Navigator>
        <Stack.Screen
        name="Landing page"
        component={LandingPage}
        options={{
          title: 'Landing page',
        }}
        />

        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
        />

        
        <Stack.Screen
        name="Signup1"
        component={SignupScreen1}
        options={{
          title: 'Signup',
        }}
        />

        <Stack.Screen
        name="Signup2"
        component={SignupScreen2}
        options={{
          title: 'Signup',
        }}
        />

        <Stack.Screen
        name="Signup3"
        component={SignupScreen3}
        options={{
          title: 'Signup',
        }}
        />
    </Stack.Navigator>
    </NavigationContainer>

  )
}

const LandingPage = ({navigation}) => {
  return (
    <View style={{justifyContent: "center", alignItems: "center", flex: 1, ...styles.gap, ...styles.background}}>
      <View>
        <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor: "navy", alignSelf: "center"}}></View>
        <Text style={{...styles.h1, ...styles.colorfulText, textAlign: "center"}}>coosmos</Text>
        <Text style={{...styles.p, width: 300, alignSelf: "center", textAlign: "center"}}>Descubre conexiones reales a través de la astrologia. ¿Estás list@?</Text>
      </View>

      <View style={{gap: 15}}>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Inicia sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Signup1')}
        >
          <Text style={styles.textButtonText}>¿No tienes cuenta? Crea una nueva</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


const LoginScreen = () => {
  return (
    <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
    >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={{flex: 1,            ...styles.background,      }}>
      <View style={{...styles.margin, ...styles.gap, alignSelf: "center", flex: 1, justifyContent: "center"}}>
        <Text style={{fontSize: 24, color: "navy"}}>¡Hola de nuevo!</Text>
            <Input name="email" label="Inserta tu correo electrónico" placeholder="correo electrónico" handleChange={handleChange} handleBlur={handleBlur} values={values} />
        <View>
        <Input name="contraseña" label="Inserta tu contraseña" placeholder="contraseña" handleChange={handleChange} handleBlur={handleBlur} values={values} />
            <FontAwesomeIcon icon={faEye} style={{position: "absolute", top: 42, right: 15}}/>
            <Text style={{fontSize: 12}}>¿Has olvidado tu contraseña?</Text>
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit} >
          <Text style={styles.buttonText}>Inicia sesión</Text>
        </TouchableOpacity>
        </View>
        <Text style={{position: "absolute", bottom: 10, alignSelf: "center"}}>Sobre coosmos</Text>
      </View>
    )}
    </Formik>
  );
};




export default LandingStack;


