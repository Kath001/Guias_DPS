/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
 import Cita from './src/components/Cita';
 import Formulario from './src/components/Formulario';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import Colors from './src/utils/colors';
 
 const App = () => {
   //Definir el state de las citas
   const [citas, setCitas] = useState([]);
   const [mostrarForm, guardarMostrarForm] = useState(false);
 
   useEffect(() => {
     const obtenerCitasStorage = async () =>{
       try{
         const citasStorage = await AsyncStorage.getItem('citas');
         if (citasStorage) {
           setCitas(JSON.parse(citasStorage))
         }
       } catch (error){
         console.log(error);
       }
     }
     obtenerCitasStorage();
   }, []);
 
   //Elimina los clientes del state
   const eliminarCliente = id => {
     const citasFiltradas = citas.filter( cita => cita.id !== id );
     setCitas(citasFiltradas);
     guardarCitasStorage(JSON.stringify(citasFiltradas));
   }
 
   //Muestra u oculta el Formulario
   const mostrarFormulario = () =>{
     guardarMostrarForm(!mostrarForm);
   }
 
   //Ocultar teclado
   const cerrarTeclado = () => {
     Keyboard.dismiss();
   }
 
   //Almacenar las citas en el Storage
   const guardarCitasStorage = async (citasJSON) => {
     try {
       await AsyncStorage.setItem('citas', citasJSON);
     } catch (error) {
       console.log(error);
     }
   }
 
   return (
     <TouchableWithoutFeedback onPress={ () => cerrarTeclado() }>
       <View style={styles.contenedor}>
         <Text style={styles.titulo}>Administrador de Reservas</Text>
         <View>
           <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrarForm}>
             <Text style={styles.textoMostrarForm}>{mostrarForm ? "Cancelar Crear Reserva" : "Crear Reserva"}</Text>
           </TouchableHighlight>
         </View>
         <View style={styles.contenido}>
           {mostrarForm ? (
             <>
             <Text style={styles.titulo}>Crear nueva Cita</Text>
             <Formulario
               citas={citas}
               setCitas={setCitas}
               guardarMostrarForm={guardarMostrarForm}
               guardarCitasStorage={guardarCitasStorage}
             />
             </>
           ) : (
             <>
             <Text style={styles.titulo}>{citas.length > 0 ? "Administra tus reservas" : "No hay reservas, agrega una"}</Text>
             <FlatList
               style={styles.listado}
               data={citas}
               renderItem={ ({item}) => <Cita item={item} eliminarCliente={eliminarCliente} /> }
               keyExtractor={ cita => cita.id }
             />
             </>
           )}
         </View>
       </View>
     </TouchableWithoutFeedback>
   );
 };
 
 const styles = StyleSheet.create({
   contenedor: {
     backgroundColor: Colors.PRIMARY_COLOR,
     flex: 1
   },
   titulo: {
     color: '#FFF',
     marginTop: Platform.OS === 'ios' ? 40 : 20 ,
     marginBottom: 20,
     fontSize: 24,
     fontWeight: 'bold',
     textAlign: 'center'
   },
   contenido: {
     flex: 1,
     marginHorizontal: '2.5%',
   },
   listado: {
     flex: 1,
   },
   btnMostrarForm: {
     padding: 10,
     backgroundColor:Colors.BUTTON_COLOR,
     marginVertical: 10
   },
   textoMostrarForm: {
     color: '#FFF',
     fontWeight: 'bold',
     textAlign: 'center'
   }
 });
 
 export default App;
 