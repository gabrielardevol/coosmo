import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

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
        <View style={{flex: 1,            ...styles.background,
        }}>

        <View style={{...styles.margin, alignSelf: "center", flex: 1, justifyContent: "center"}}>
        <Text style={{...styles.colorfulText,  ...styles.h1,  textAlign: "center"}}>1/3</Text>

          <CreaTuNuevaCuenta />
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
        <View style={{flex: 1,             ...styles.background,
        }}>

        <View style={{...styles.margin, alignSelf: "center", flex: 1, justifyContent: "center"}}>
        <Text style={{...styles.colorfulText,  ...styles.h1,  textAlign: "center"}}>2/3</Text>

        <CreaTuNuevaCuenta />
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

  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.textInput, {backgroundColor: "red", height: 40}]}
          // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={data}
          // search
          // maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? 'blue' : 'black'}
          //     name="Safety"
          //     size={20}
          //   />
          // )}
        />
      </View>
    );
  };


  export  const SignupScreen3 = ({navigation}) => {
    return (
      <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{flex: 1,             ...styles.background,
        }}>
            <View style={{...styles.margin, alignSelf: "center", flex: 1, justifyContent: "center"}}>
            <Text style={{...styles.colorfulText, ...styles.h1, textAlign: "center"}}>3/3</Text>
            <CreaTuNuevaCuenta />
                <View style={{backgroundColor: "blue", flexDirection: "row"}}>
                <DropdownComponent></DropdownComponent>
                <Input name="name" 
                label="Inserta tu nombre y apellidos" 
                placeholder="Nombre" 
                handleChange={handleChange} 
                handleBlur={handleBlur} 
                values={values} 
                />
                </View>
                

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

  const CreaTuNuevaCuenta = () => {
    return (
      <Text style={{...styles.h2,  ...styles.colorfulText, textAlign: "center"}}>¡Crea tu nueva cuenta!</Text>

    )
  }

  