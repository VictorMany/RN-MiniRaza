import React from 'react';
import { StyleSheet, TextInput, Text, View } from "react-native"
import colors from '../utils/colors';

export default function Form(props) {
    const { setNum1, setNum2 } = props; //Es re estructuraacion de datos
    var num1 = parseInt(setNum1);
    var num2 = parseInt(setNum2);

    let sum = num1 + num2;
    let res = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;

    return (
        <View>
            <Text>
                Suma: {sum}
            </Text>
            <Text>
                Resta: {res}
            </Text>
            <Text>
                Multiplicación: {mul}
            </Text>
            <Text>
                División: {div}
            </Text>

        </View>
    )
}