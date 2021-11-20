import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Form(props) {
    const {setSalario, setNombre} = props

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Juan López" keyboardType="default" style={styles.input} onChange={(e) => setNombre(e.nativeEvent.text)}></TextInput>
                <TextInput placeholder="0" keyboardType="numeric" style={styles.input} onChange={(e) => setSalario(e.nativeEvent.text)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: "#fff",
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
});
