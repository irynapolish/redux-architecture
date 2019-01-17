import { CLEAR_DATA } from 'constants';

const clearDataSuccess = () => (
  {
    type: CLEAR_DATA,
    payload: { weatherInfo: {} },
  }
);

export const clearData = () => (
  (dispatch: Function) => {
    dispatch(clearDataSuccess());
  }
);
