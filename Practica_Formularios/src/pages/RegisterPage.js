import React from 'react';
import { View, Text, Button } from 'react-native'

const RegisterPage = ({ navigation }) => {
    return (
        <View>
            <Text>Home Page (View)</Text>
            <Button onPress={() => navigation.navigate('HomePage')} title="Registrarse"></Button>
        </View>
    )
}

export default RegisterPage