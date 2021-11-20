/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Result from './src/components/Result'
import { Toolbar } from 'react-native-material-ui';

export default function App(){
  const [salario, setSalario] = useState(null)
  const [nombre, setNombre] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
/*
  useEffect(() => {
    if (salario && nombre)
      calculate()
    else
      reset()
  }, [salario, nombre])
*/
  const calculate = () => {
    reset()
    if (!salario)
      setErrorMessage('Ingrese su nombre')
    else if (!nombre)
      setErrorMessage('Ingrese su salario')
    else{
      var isss = (salario * 0.03).toFixed(2)
      var afp = (salario * 0.04).toFixed(2)
      var renta = (salario * 0.05).toFixed(2)
      var descuento = ((salario * 0.03) + (salario * 0.04) + (salario * 0.05)).toFixed(2)
      var total = (salario - (salario * 0.03) - (salario * 0.04) - (salario * 0.05)).toFixed(2)
      setTotal({
        isss: isss,
        afp: afp,
        renta: renta,
        descuento: descuento,
        total: total
      })
    }
  }

  const reset = () => {
    setErrorMessage('')
    setTotal(null)
  }

  return(
    <>
    <StatusBar barStyle="light-content"></StatusBar>
    <Toolbar
        centerElement="Deducción de descuentos"
      />
    <SafeAreaView style={styles.Header}>
      
      <Form
        setNombre={setNombre}
        setSalario ={setSalario}
      ></Form>
    </SafeAreaView>
    <Result
      salario={salario}
      nombre={nombre}
      total={total}
      errorMessage={errorMessage}
    />
    <Footer calculate={calculate}></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor: "#fff",
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
},
HeadApp:{
  fontSize: 25,
  fontWeight: 'bold',
  color: '#fff',
  marginTop: 15,
}
})