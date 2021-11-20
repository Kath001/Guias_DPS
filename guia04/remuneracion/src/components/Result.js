import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Divider  } from 'react-native-material-ui';

export default function Result(props) {
    const {salario, nombre, total, errorMessage} = props

    return (
        <View>
            <Divider/>
            <Card>
                {total &&(
                    <View style={styles.boxResult}>
                        <Text style={styles.title}>RESUMEN</Text>
                        <DataResult title="Nombre:" value={`${nombre}`} />
                        <DataResult title="Salario:" value={`$${salario}`} />
                        <DataResult title="ISSS:" value={`$${total.isss}`} />
                        <DataResult title="AFP:" value={`$${total.afp}`} />
                        <DataResult title="Renta:" value={`$${total.renta}`} />
                        <DataResult title="Salario Neto:" value={`$${total.total}`} />
                    </View>
                )}
                <View>
                    <Text style={styles.error}>{errorMessage}</Text>
                </View>
            </Card>
        </View>
    );
}

function DataResult(props) {
    const {title, value} = props

    return(
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
