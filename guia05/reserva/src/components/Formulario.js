import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import RNPickerSelect from 'react-native-picker-select';
import shortid from "shortid";
import colors from '../utils/colors'

const Formulario = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage}) => {
    //Variables para el formulario
    const [cliente, guardarCliente] = useState('');
    const [cantidad, guardarCantidad] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [seccion, guardarSeccion] = useState('');
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }

    const confirmaFecha = date => {
        const opciones = { year: "numeric", month: "long", day: "2-digit"};
        guardarFecha(date.toLocaleDateString("es-ES", opciones));
        hideDatePicker()
    }

    //Muestra u oculta el Time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }

    const confirmarHora = hora => {
        const opciones = { hour: "numeric", minute : "2-digit", hour12: false};
        guardarHora(hora.toLocaleDateString("es-ES", opciones));
        hideTimePicker();
    }

    //Crear nueva cita
    const crearNuevaCita = () => {
        //Validar
        if (cliente.trim() === '' || cantidad.trim() === '' || fecha.trim() === '' || hora.trim() === '' ) {
            //Falla la validacion
            mostrarAlerta();
            return;
        }

        //Crear una nueva cita
        const cita = { cliente, cantidad, fecha, hora, seccion, id }
        cita.id = shortid.generate();

        //Agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        //Pasar las nuevas citas a storage
        guardarCitasStorage(JSON.stringify(citasNuevo));

        //Ocultar el formulario
        guardarMostrarForm(false);

        //Resetear el formulario
        guardarCliente('');
        guardarHora('');
        guardarFecha('');
        guardarCantidad('');
    }

    //Muestra alerta si falla la validación
    const mostrarAlerta = () => {
        Alert.alert(
            "Error", //Titulo
            "Todos los campos son obligatorios", //Mensaje
            [{
                text: "OK" //Arreglo de botones
            }]
        )
    }

    return(
        <>
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Cliente:</Text>
                <TextInput style={styles.input} onChangeText={ texto => guardarCliente(texto) } />
            </View>
            <View>
                <Text style={styles.label}>Comensales:</Text>
                <TextInput style={styles.input} onChangeText={ texto => guardarCantidad(texto) } keyboardType = "numeric" />
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmaFecha}
                    onCancel={hideDatePicker}
                    locale="es_ES"
                    headerTextIOS="Elije la fecha"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                />
                <Text>{fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    locale="es_ES"
                    headerTextIOS="Elije una Hora"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                />
                <Text>{hora}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sección:</Text>
                <RNPickerSelect onValueChange={(value) => guardarSeccion(value)} placeholder={{ label: 'Seleccióna los sección...', value: null, }}
                    items={[
                        {label: 'Fumadores', value: 1},
                        {label: 'No fumadores', value: 0},
                    ]}
                />
                <Text>{seccion == 1 ? "Fumadores" : "No fumadores"}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={ () => crearNuevaCita() } style={styles.btnSubmit}>
                    <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor:colors.BUTTON_COLOR,
        marginVertical: 10
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Formulario;