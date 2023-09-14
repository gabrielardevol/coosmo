import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

import Input from './Form';

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
        name="Signup"
        component={SignupScreen}
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
    <View style={styles.container}>
      <View>
        <View style={{width: 100, height: 100, borderRadius: 100, backgroundColor: "navy", alignSelf: "center"}}></View>
        <Text style={{fontSize: 50, color: "navy", textAlign: "center"}}>coosmos</Text>
        <Text style={{width: 300, textAlign: "center", fontSize: 16}}>Descubre conexiones reales a través de la astrologia. ¿Estás list@?</Text>
      </View>

      <View style={{gap: 15}}>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Inicia sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
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
      <View style={{flex: 1, backgroundColor: "white"}}>
      <View style={{width: 350, alignSelf: "center", gap: 20, flex: 1, justifyContent: "center"}}>
        <Text style={{fontSize: 24, color: "navy"}}>¡Hola de nuevo!</Text>
            <Input name="email" label="Inserta tu correo electrónico" placeholder="correo electrónico" handleChange={handleChange} handleBlur={handleBlur} values={values} />
        <View>
        <Input name="contraseña" label="Inserta tu contraseña" placeholder="contraseña" handleChange={handleChange} handleBlur={handleBlur} values={values} />
            <FontAwesomeIcon icon={faEye} style={{position: "absolute", top: 42, right: 15}}/>
            <Text style={{fontSize: 12}}>¿Has olvidado tu contraseña?</Text>
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}        >
          <Text style={styles.buttonText}>Inicia sesión</Text>
        </TouchableOpacity>
        </View>
        <Text style={{position: "absolute", bottom: 10, alignSelf: "center"}}>Sobre coosmos</Text>
      </View>
    )}
    </Formik>
  );
};

const SignupScreen = () => {
    return (
      <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
      >

      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{flex: 1, backgroundColor: "white"}}>

        <View style={{width: 350, alignSelf: "center", gap: 20, flex: 1, justifyContent: "center"}}>
        <Text style={{fontSize: 40, color: "navy", textAlign: "center"}}>1/3</Text>

          <Text style={{fontSize: 24, color: "navy"}}>¡Crea tu nueva cuenta!</Text>
              <Input name="name" 
              label="Inserta tu nombre y apellidos" 
              placeholder="Nombre" 
              handleChange={handleChange} 
              handleBlur={handleBlur} 
              values={values} />
          <View>
          <Input name="lastName" label="" placeholder="Apellidos" handleChange={handleChange} handleBlur={handleBlur} values={values} />
          </View>
          <TouchableOpacity 
          style={{...styles.button, width: 40, alignSelf: "center"}}
          onPress={handleSubmit}        >
            <Text style={styles.buttonText}>
                <FontAwesomeIcon icon={faArrowRight} style={{position: "absolute", top: 42, right: 15, color: "white"}}/>
            </Text>
          </TouchableOpacity>
          </View>
          <Text style={{position: "absolute", bottom: 10, alignSelf: "center"}}>Sobre coosmos</Text>
        </View>
      )}
      </Formik>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },

  button: {
    backgroundColor: 'navy',
    padding: 10,
    borderRadius: 5,

    // width: 300
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",

  },

  textButtonText: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
    alignSelf: "center"
  },

  textInput: {backgroundColor: "white", borderColor: "navy", borderWidth: 1, borderRadius: 8, paddingLeft: 10 ,padding: 5, marginTop: 10, marginBottom: 10}
});

export default LandingStack;


import { Formik } from 'formik';
