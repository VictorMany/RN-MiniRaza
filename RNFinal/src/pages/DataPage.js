import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import DataComponent from '../components/DataComponents/DataComponent';
import CardComponent from '../components/HomeComponents/cardComponent';


const DataPage = () => {

    const [nombre, setNombre] = useState('Victor Manuel Velazquez Fuentes');
    const [correo, setCorreo] = useState('victor.velazfuyentez@gmail.com');
    const [contraseña, setContraseña] = useState('12345');
    const [carrera, setCarrera] = useState('ISSC');
    const [semestre, setSemestre] = useState('Sexto');
    const [username, setUsername] = useState('vycmany');

    return (
        <View>
            <DataComponent Nombre={nombre} Correo={correo} Contraseña={contraseña} Carrera={carrera} Semestre={semestre} Username={username}></DataComponent>
        </View >
    )
}


export default DataPage

