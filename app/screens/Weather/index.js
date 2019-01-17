import React from 'react';
import { View, StatusBar, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Screen, Row, Header, Button } from 'components';
import styles from './styles';
import { primary } from 'colors';
import * as Assets from 'assets';

type Props = {
  error: boolean,
  isLoading: boolean,
  weatherInfo: Object,
  fetchData: Function,
  clearData: Function,
}

const getErrorMessage = () => (
  <Text bold style={styles.errorText}>
    An Error occured while fetching data
  </Text>
);

const getWeatherInfo = (weatherInfo) => {
  const { summary, temperature } = weatherInfo;

  return (
    <View style={styles.textContainer}>
      <Text title>{temperature} deg, {summary}</Text>
      <View style={{ height: 2, backgroundColor: 'lightblue'}} />
      
      <Text>cloudCover : {weatherInfo.cloudCover}</Text>
      <Text>dewPoint : {weatherInfo.dewPoint}</Text>
      <Text>humidity : {weatherInfo.humidity}</Text>
      <Text>nearest storm bearing : {weatherInfo.nearestStormBearing}</Text>
      <Text>nearest storm distance : {weatherInfo.nearestStormDistance}</Text>
      <Text>ozone : {weatherInfo.ozone}</Text>
      <Text>precip intensity : {weatherInfo.precipIntensity}</Text>
      <Text>precip probability : {weatherInfo.precipProbability}</Text>
      <Text>time : {weatherInfo.time}</Text>
      <Text>visibility : {weatherInfo.visibility}</Text>
      <Text>wind bearing : {weatherInfo.windBearing}</Text>
      <Text>wind gust : {weatherInfo.windGust}</Text>
      <Text>wind speed : {weatherInfo.windSpeed}</Text>
    </View>
  );
};

const WeatherScreen = (props: Props) => {
  const {
    isLoading,
    error,
    fetchData,
    clearData,
    weatherInfo,
  } = props;
  const hasWeatherData = Object.keys(weatherInfo).length;

  return (
    <Screen useSafeArea={false}>
      <StatusBar
        barStyle="dark-content"
      />
      <Header 
        title='Weather forecast'
        style={{ marginTop: 20 }}
      />
      <ScrollView style={{ backgroundColor: primary }}>
        <View style={styles.container}>
          {isLoading ? <ActivityIndicator /> : null}
          {error ? getErrorMessage() : null}
          {hasWeatherData ? getWeatherInfo(weatherInfo) : null}
        </View>
      </ScrollView>
        <View style={{ height: 2, backgroundColor: 'lightblue'}} />
        <View style={{ alignItems: 'center' }}>
          <Row>
            <TouchableOpacity onPress={fetchData}>
              <Image
                source={Assets.iconMoon}
                style={styles.bottomImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={clearData}>
              <Image
                source={Assets.iconSun}
                style={styles.bottomImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Row>
      </View>
    </Screen>
  );
};

export default WeatherScreen;
