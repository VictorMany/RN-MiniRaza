import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from "react-native";
//Se estila importar lo nuestro despues de las librerias q no
import colors from './src/utils/colors';
import Form from './src/components/Form';

export default function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

  const onSubmit = () => {
    console.log("N1 -> ", num1)
    console.log("N2 -> ", num2)
  }
  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>

      <SafeAreaView style={styles.SafeArea}>
        <Text style={styles.titleApp}>Adquisición de variables</Text>
        <Form setNum1={setNum1} setNum2={setNum2} />


      </SafeAreaView>
      <View style={styles.top}>
        <Button title="Enviar" onPress={onSubmit()}>

        </Button>
      </View>
    </> //Esto es un fragment
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    marginTop: 5
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#000',
    marginTop: 15
  },
  top: {
    marginTop: 100
  }
})