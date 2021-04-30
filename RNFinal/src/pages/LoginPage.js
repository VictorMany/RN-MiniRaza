import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const LoginPage = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Image source={require('../img/image_logo.jpg')}
                style={{ width: 300, height: 300, borderRadius: 1000, alignSelf: 'center' }}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: "SemiBold",
                    alignSelf: "center",
                    fontWeight: 'bold',
                    marginTop: 10,
                    color: '#29444D'
                }}
            >Bienvenido !!</Text>



            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#29444D",
                borderRadius: 23,
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
                    placeholder="Contraseña"
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
                borderRadius: 23
            }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={styles.text}>Iniciar Sesion</Text>
                </TouchableOpacity>
            </View>


            <Text
                onPress={() => navigation.navigate('RegisterPage')}
                style={{
                    alignSelf: "center",
                    color: "#29444D",
                    fontFamily: "SemiBold",
                    paddingVertical: 30
                }}>Registrarme</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {

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


export default LoginPage


