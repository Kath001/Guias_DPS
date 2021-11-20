import React from "react";
import { View } from "react-native";
import { Button } from 'react-native-material-ui';

export default function Footer(props) {
    const {calculate} = props

    return(
        <View>
            <Button raised primary text="CALCULAR" onPress={calculate} />
        </View>
    );
}