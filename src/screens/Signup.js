import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import Input from '../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

export const SignupScreen1 = ({navigation}) => {
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

            onPress={() => navigation.navigate('Signup2')} >
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


export  const SignupScreen2 = ({navigation}) => {
    return (
      <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
      >

      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{flex: 1, backgroundColor: "white"}}>

        <View style={{width: 350, alignSelf: "center", gap: 20, flex: 1, justifyContent: "center"}}>
        <Text style={{fontSize: 40, color: "navy", textAlign: "center"}}>2/3</Text>

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
          onPress={() => navigation.navigate('Signup3')} >

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


  export  const SignupScreen3 = ({navigation}) => {
    return (
      <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
      >

      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{flex: 1, backgroundColor: "white"}}>

        <View style={{width: 350, alignSelf: "center", gap: 20, flex: 1, justifyContent: "center"}}>
        <Text style={{fontSize: 40, color: "navy", textAlign: "center"}}>3/3</Text>

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
  const styles = StyleSheet.create({  button: {
    backgroundColor: 'navy',
    padding: 10,
    borderRadius: 5,

    // width: 300
  },})

//   export default SignupScreen1