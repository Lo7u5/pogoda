import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Weather(props) {
    return (
        <View style={styles.container}>
            <Text>
                 current temperature {props.main.temp}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})