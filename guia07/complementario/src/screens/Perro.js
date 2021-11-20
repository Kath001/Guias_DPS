import React from "react";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {View, Text, Image} from 'react-native'
import {List, ListItem, Avatar} from 'react-native-elements'
import Catalogo from '../catalogo.json'

const Dog = () => {
    const perro = Catalogo.Perro;
    return(
        
        <SafeAreaProvider>
        <View>
        {   
            perro.map((p, i) => {
                return(
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{ uri: p.image.toString() }} />
                        <ListItem.Content>
                            <ListItem.Title>{p.raza}</ListItem.Title>
                            <ListItem.Subtitle>{p.pais}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                );
            })
        }
        </View>
        </SafeAreaProvider>
    );
}

export default Dog;