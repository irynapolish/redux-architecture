import { connect } from 'react-redux';
import { WeatherScreen } from 'screens';
import { getWeatherSelector } from '../../reducers/weather-reducer';
import { fetchData } from 'actions/fetch-data';
import { clearData } from 'actions/clear-data';

const mapStateToProps = (state: Object) => getWeatherSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: () => dispatch(fetchData()),
  clearData: () => dispatch(clearData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherScreen);
