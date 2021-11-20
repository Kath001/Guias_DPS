import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

const Cita = ({item, eliminarCliente}) => {
    const dilogoEliminar = id => {
        console.log("Eliminado...", id)
        eliminarCliente(id)
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Clinte: </Text>
                <Text style={styles.texto}>{item.cliente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Comensales: </Text>
                <Text style={styles.texto}>{item.cantidad}</Text>
            </View>
            <View>
                <Text style={styles.label}>Seeción:</Text>
                <Text style={styles.texto}>{item.seccion === 0 ? "No fumadores" : "Fumadores"}</Text>
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Text style={styles.texto}>{item.fecha} - {item.hora}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={ ()=> dilogoEliminar(item.id) } style={styles.btnEliminar} >
                    <Text style={styles.textoEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
)

export default Cita;
    