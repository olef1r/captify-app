import * as types from '../actions/action-types';

const initialState = {
  value: 'kuyui',
  data: [],
  fetched: false
};

const valueReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.ADD_VALUE:
      return Object.assign({}, state, {
        value: action.value
      });
      case types.FETCH_VALUES:
        return data;
  }

  
  return state;

}

export default valueReducer;
