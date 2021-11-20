import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { View, Text, Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, ListItem, Button, Icon } from "react-native-elements";

const productos = [
    {
        id: 1,
        nombre: "PUPUSAS",
        descripcion: "La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc",
        src: require('./src/imgs/pupusas.jpg')
    },
    {
        id: 2,
        nombre: "SOPA DE GALLINA INDIA",
        descripcion: "Uno de los platos típicos de El Salvador, popular por su delicioso sabor, por su fácil preparación y muy económica.",
        src: require('./src/imgs/gallina_india.jpg')
    },
    {
        id: 3,
        nombre: "ELOTE LOCO",
        descripcion: "Es como una botana,aperitivo y hasta una comida típica para cuando son las fiestas patronales en mi querido país El Salvador o también cuando llega la pequeña feria .... más para el tiempo de las cosechas de elote (maíz)...",
        src: require('./src/imgs/elote_loco.jpg')
    },
    {
        id: 4,
        nombre: "TAMAL DE ELOTE",
        descripcion: " Consiste en un tamal elaborado con maíz tierno molido, al cual se le agrega un poco de sal. Tiene un sabor dulce y su consistencia es suave.",
        src: require('./src/imgs/tamal_elote.webp')
    },
    {
        id: 5,
        nombre: "YUCA FRITA",
        descripcion: "Es una yuca frita con salsa de tomate, curtido y acompañada con una merienda, ya sea, pepesca o chicharron",
        src: require('./src/imgs/yuca_frita.jpg')
    },
]


const App = () => {
    return( 
        <SafeAreaProvider>
            {productos.map((u, i) =>
                <Card key={u.id}>
                    <Card.Title>{u.nombre}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={u.src}> 
                    </Card.Image>
                    <Text style={{marginBottom: 0}}>
                            {u.descripcion}
                    </Text>
                </Card>
            )}
        </SafeAreaProvider>
    );
}

AppRegistry.registerComponent("tipicos", () => App);