import React from "react";
import {View, Text, Image} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {List, ListItem, Avatar} from 'react-native-elements'
import Catalogo from '../catalogo.json'

const Cat = () => {
    return(
        <SafeAreaProvider>
        <View>
        {
            Catalogo.Gato.map((g, i) => {
                return(
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{ uri: g.image.toString() }} />
                        <ListItem.Content>
                            <ListItem.Title>{g.raza}</ListItem.Title>
                            <ListItem.Subtitle>{g.pais}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );
            })
        }
        </View>
        </SafeAreaProvider>
    );
}

export default Cat;