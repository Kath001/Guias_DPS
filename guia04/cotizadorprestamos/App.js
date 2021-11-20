/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import colors from "./src/utils/colors";
import Form from "./src/components/Forms";
import Footer from "./src/components/Footer";
import Result from './src/components/Result'

export default function App(){
  const [capital, setCapital] = useState(null)
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (capital && interest && months)
      calculate()
    else
      reset()
  }, [capital, interest, months])

  const calculate = () => {
    reset()
    if (!capital)
      setErrorMessage('Añade la cantidad que deseas solicitar')
    else if (!interest)
      setErrorMessage('Añade el interes del préstamo')
    else if (!months)
      setErrorMessage('Selecctiona los meses a pagar')
    else{
      const i = interest / 100
      const fee = capital / ((1 - Math.pow(i + 1,- months)) / i)
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ',')
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
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
      <Form
        setCapital={setCapital}
        setInterest ={setInterest}
        setMonths={setMonths}
      ></Form>
    </SafeAreaView>
    <Result
      capital={capital}
      interest={interest}
      months={months}
      total={total}
      errorMessage={errorMessage}
    />
    <Footer calculate={calculate}></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor: colors.PRIMARY_COLOR,
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