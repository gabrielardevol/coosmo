import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import Input from '../components/Form';

import { FormFooter } from '../components/FormFooter'
import { ArrowButton } from '../components/buttons';
import { styles } from '../styles/stylesheet';
export const SignupScreen1 = ({navigation}) => {
    return (
      <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
      >

      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{flex: 1, backgroundColor: "white"}}>

        <View style={{width: 350, alignSelf: "center", gap: 20, flex: 1, justifyContent: "center"}}>
        <Text style={{...styles.colorfulText,  ...styles.h1,  textAlign: "center"}}>1/3</Text>

          <Text style={{...styles.h2, ...styles.colorfulText}}>¡Crea tu nueva cuenta!</Text>
              <Input name="name" 
              label="Inserta tu nombre y apellidos" 
              placeholder="Nombre" 
              handleChange={handleChange} 
              handleBlur={handleBlur} 
              values={values} />
          <View>
          <Input name="lastName" label="" placeholder="Apellidos" handleChange={handleChange} handleBlur={handleBlur} values={values} />
          </View>
          <ArrowButton onPress={() => navigation.navigate('Signup2')}/>

          </View>
          <FormFooter />
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
        <Text style={{...styles.colorfulText,  ...styles.h1,  textAlign: "center"}}>2/3</Text>

          <Text style={{...styles.h2,  ...styles.colorfulText}}>¡Crea tu nueva cuenta!</Text>
              <Input name="name" 
              label="Inserta tu nombre y apellidos" 
              placeholder="Nombre" 
              handleChange={handleChange} 
              handleBlur={handleBlur} 
              values={values} />
          <View>
          <Input name="lastName" label="" placeholder="Apellidos" handleChange={handleChange} handleBlur={handleBlur} values={values} />
          </View>
          <ArrowButton onPress={() => navigation.navigate('Signup3')}/>
          </View>
          <FormFooter />
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
            <Text style={{...styles.colorfulText, ...styles.h1, textAlign: "center"}}>3/3</Text>
                <Text style={{...styles.h2,  ...styles.colorfulText}}>¡Crea tu nueva cuenta!</Text>
                <Input name="name" 
                label="Inserta tu nombre y apellidos" 
                placeholder="Nombre" 
                handleChange={handleChange} 
                handleBlur={handleBlur} 
                values={values} />

                <Input name="lastName" 
                label="" 
                placeholder="Apellidos" 
                handleChange={handleChange} 
                handleBlur={handleBlur} 
                values={values} />
                <ArrowButton onPress={handleSubmit}/>
            </View>
            <FormFooter/>
        </View>
      )}
      </Formik>
    );
  };


  