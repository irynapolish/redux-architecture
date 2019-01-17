import { fetchWeatherData } from '../../services/http-requests';

import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST, CLEAR_DATA } from 'constants';

const fetchDataSuccess = (weatherInfo: Object) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: { weatherInfo },
  }
);

const fetchDataError = () => (
  {
    type: FETCH_DATA_ERROR,
    payload: { error: true },
  }
);

const fetchDataRequest = () => (
  {
    type: FETCH_DATA_REQUEST,
    payload: { isLoading: true },
  }
);

export const fetchData = () => (
  (dispatch: Function) => {
    dispatch(fetchDataRequest());
    return fetchWeatherData()
      .then((weatherInfo) => { 
        console.log('weatherInfo', weatherInfo); 
        dispatch(fetchDataSuccess(weatherInfo));
      })
      .catch(() => dispatch(fetchDataError()));
  }
);
