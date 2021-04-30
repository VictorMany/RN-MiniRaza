import React from 'react';
import { View, Text, Button } from 'react-native'

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Text>HomePage (View)</Text>
            <Button onPress={() => navigation.navigate('AdvicePage')} title="Advice Page"></Button>
        </View>
    )
}

export default HomePage