import React, {useState} from 'react'
import {Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert} from 'react-native'
import {Picker} from '@react-native-community/picker'

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
    const {pais} = busqueda;

    const [animacionboton] = useState(new Animated.Value(1));

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Debe seleccionar un pais'), [{Text: 'Entendido'}];
    }

    const consultarPais = () => {
        if (pais.trim() === '') {
            mostrarAlerta();
            return;
        }

        //Consultar API
        guardarConsultar(true);
    }

    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: .9,
            useNativeDriver: true
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring(animacionboton,{
            toValue: 1,
            useNativeDriver: true
        }).start();
    }

    const estiloAnimacion = {
        transform:[{
            scale: animacionboton
        }]
    }
    
    return(
        <>
        <View>
            <View>
                <Text style={styles.input}>País</Text>
            </View>
            <View>
                <Picker
                 selectedValue={pais}
                 onValueChange={pais => guardarBusqueda({...busqueda, pais})}
                 onPress={consultarPais()}
                 style={styles.itempais}>
                    <Picker.Item label="--Seleccione un pais--" value=""></Picker.Item>
                    <Picker.Item label="Canada" value="ca"></Picker.Item>
                    <Picker.Item label="El Salvador" value="sv"></Picker.Item>
                    <Picker.Item label="Guatemala" value="gt"></Picker.Item>
                    <Picker.Item label="Honduras " value="hn"></Picker.Item>
                    <Picker.Item label="Nicaragua" value="ni"></Picker.Item>
                    <Picker.Item label="Panama" value="pa"></Picker.Item>
                    <Picker.Item label="Costa Rica" value="cr"></Picker.Item>
                    <Picker.Item label="Mexico" value="mx"></Picker.Item>
                    <Picker.Item label="Argentina" value="ar"></Picker.Item>
                    <Picker.Item label="Estados Unidos" value="us"></Picker.Item>
                    <Picker.Item label="Colombia" value="co"></Picker.Item>
                    <Picker.Item label="España" value="es"></Picker.Item>
                    <Picker.Item label="Perú" value="pe"></Picker.Item>
                </Picker>
            </View>
            <TouchableWithoutFeedback
                onPressIn={ () => animacionEntrada() }
                onPressOut={ () => animacionSalida() }
            >
                <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                    <Text style={styles.textoBuscar} >Buscar País</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
        </>
    );
}

const styles= StyleSheet.create({
    input:{
        padding:10,
        height:50,
        fontSize:20,
        marginBottom:20,
        textAlign:'center',
        color :'#000'
    },
    itempais:{
        height:60,
        backgroundColor:'#fff',
    },
    btnBuscar:{
        marginTop:50,
        height:50,
        backgroundColor:'#000',
        fontSize:20,
        marginBottom:20,
        textAlign:'center'
    },
    textoBuscar:{
        color:'#fff',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:"center",
        fontSize:18
    }
})


export default Formulario;