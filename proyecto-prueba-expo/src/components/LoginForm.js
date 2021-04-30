import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function LoginForm(props) {
    const { changeForm } = props;

    return (
        <View>
            <Text>Login Form!!</Text>
            <TouchableOpacity onPress={changeForm}>
                <Text style={styles.btn}>
                    Regístrate
                </Text>
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    btn: {
        color: '#fff'
    }
})


