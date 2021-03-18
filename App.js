import React from 'react';
import Loading from './Loading';
import Weather from './Weather'
import * as Location from 'expo-location';
import { Alert, DatePickerAndroid } from 'react-native';
import * as axios from 'axios';

const API_KEY_WEATHER = '47494569ccbe186ad502bdc3892256c2';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}&units=metric`);
    this.setState({ isLoading: false , data})
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Can\'t get location', 'Please grant permission');
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      this.state.isLoading ? <Loading /> : <Weather {...this.state.data} />
    )
  }
}