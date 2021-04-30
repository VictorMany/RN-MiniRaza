import React from 'react';
import { StyleSheet, TextInput, View } from "react-native"
import colors from '../utils/colors';

export default function Form(props) {
    const { setNum1, setNum2 } = props; //Es re estructuraacion de datos
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Numero 1"
                    keyboardType="numeric"
                    style={styles.input}
                    //onChange = {(e) => console.log(e.nativeEvent.text)}
                    onChange={(e) => setNum1(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Numero 2"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setNum2(e.nativeEvent.text)} >
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute", //Significa 
        bottom: -90, // que sea hasta abajo?. Permite mover -90 del componente anterior
        paddingHorizontal: 50,
        width: "85%",
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },
    viewInputs: {
        flexDirection: 'row'
    },
    input: {
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        paddingHorizontal: 20,
        color: "#000"
    },
    input2: {
        width: "40%",
        marginLeft: 5
    }
})