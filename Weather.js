import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        color: ['#141e30', '#243b55'],
        tittle: 'Гроза!',
        description: 'Лучше не выходить на улицу'
    },
    Drizzle: {
        iconName: 'cloud-drizzle',
        color: ['#3a7bd5', '#3a6073'],
        tittle: 'Дождик',
        description: 'Не забудьте взять зонтик'
    },
    Rain: {
        iconName: 'weather-pouring',
        color: ['#000046', '#1cb5e0'],
        tittle: 'Дождь',
        description: 'Лучше воспользоваться такси'
    },
    Snow: {
        iconName: 'snowflake',
        color: ['#83a4d4', '#b6fbff'],
        tittle: 'Снежок',
        description: 'Пора лепить снеговиков'
    },
    Mist: {
        iconName: 'weather-fog',
        color: ['#606c88', '#3f4c6b'],
        tittle: 'Туман',
        description: 'Будьте осторожнее, ничего не видно'
    },
    Smoke: {
        iconName: 'weather-windy',
        color: ['#56ccf2', '#2f80ed'],
        tittle: 'Дымка',
        description: 'Оглянись вокруг, возможно там красиво'
    },
    Haze: {
        iconName: 'weather-hazy',
        color: ['#3e5151', '#decba4'],
        tittle: 'Туман',
        description: 'Будьте осторожнее, ничего не видно'
    },
    Fog: {
        iconName: 'weather-fog',
        color: ['#606c88', '#3f4c6b'],
        tittle: 'Туман',
        description: 'Будьте осторожнее, ничего не видно'
    },
    Sand: {
        iconName: 'weather-windy-variant',
        color: ['#b79891', '#94716b'],
        tittle: 'Пыльный ветер',
        description: 'Не забудьте прикрыть лицо'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        color: ['#b79891', '#94716b'],
        tittle: 'Пыль',
        description: 'Не забудьте прикрыть лицо'
    },
    Ash: {
        iconName: 'weather-windy-variant',
        color: ['#b79891', '#94716b'],
        tittle: 'Пыль',
        description: 'Не забудьте прикрыть лицо'
    },
    Squall: {
        iconName: 'weather-lightning-rainy',
        color: ['#0575E6', '#021B79'],
        tittle: 'Гроза',
        description: 'Лучше остаться дома'
    },
    Tornado: {
        iconName: 'weather-tornado',
        color: ['#bdc3c7', '#2c3e50'],
        tittle: 'Торнадо',
        description: 'Запритесь в подвале, вообще видели что на улице творится???'
    },
    Clear: {
        iconName: 'weather-sunny',
        color: ['#56ccf2', '#2f80ed'],
        tittle: 'Ясный денек',
        description: 'Лучшее время для прогулки'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        color: ['#757f9a', '#d7dde8'],
        tittle: 'Облачно',
        description: 'Солнцезащитные очки можно оставить дома'
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].color}
            style={styles.container}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white' />
                <Text style={styles.temp}>
                    {Math.round(temp)}°
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.tittle}>
                    {weatherOptions[condition].tittle}
                </Text>
                <Text style={styles.description}>
                    {weatherOptions[condition].description}
                </Text>
            </View>
            <StatusBar barStyle='light-content' />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 40,
        paddingBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    tittle: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'left'
    },
    description: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'left'
    }
})

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist ', 'Smoke ', 'Haze ', 'Fog ', 'Sand ', 'Dust ', 'Ash ', 'Squall ', 'Tornado ', 'Clear', 'Clouds']).isRequired
}