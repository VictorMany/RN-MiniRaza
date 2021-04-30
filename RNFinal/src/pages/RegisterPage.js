import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';

const RegisterPage = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Image source={require('../img/perfil.png')}
                style={{ width: 200, height: 200, alignSelf: 'center' }}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: "SemiBold",
                    alignSelf: "center",
                }}
            >Registro</Text>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#29444D",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#29444D"
                    style={{ paddingHorizontal: 10 }}
                />



            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#29444D",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#29444D"
                    style={{ paddingHorizontal: 10 }}
                />




            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#29444D",
                borderRadius: 23,
                paddingVertical: 2
            }}>

                <TextInput
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="#29444D"
                    style={{ paddingHorizontal: 10 }}
                />


            </View>

            <View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                backgroundColor: "#29444D",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text
                    onPress={() => navigation.navigate('HomePage')}
                    style={{
                        color: "white",
                        fontFamily: "SemiBold"
                    }}>Register</Text>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '40%'
    },
    textoIzquiera: {
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        backgroundColor: 'orange',
        padding: 16,
        borderRadius: 20,
        width: '75%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});




export default RegisterPage