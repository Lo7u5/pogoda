import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.updateText}>
                Updating the Weather...
            </Text>
            <StatusBar barStyle='dark-content' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bada55',
        justifyContent: 'center',
    },
    updateText: {
        color: '#2c2c2c',
        fontSize: 30,
        alignSelf: 'center'
    }
})