  
import * as types from './action-types';

export function loadValue(value) {

  return {
    type: types.ADD_VALUE,
    value
  };
};


export function fetchValues() {
  return dispatch => {
    dispatch({ type: types.FETCH_VALUES});
    // apiActionCreator(() => applications.getMember(id), dispatch, resp => {
    //   dispatch({ type: FORMS.FETCH_OK, data: resp, model: APPLICATION.NAME });
    //   dispatch({ type: AUTHENTICATION.UPDATE, field: 'selectedApplication', value: id });
    // });
  };
}


// export function createAdministrator(data) {
//   return (dispatch, getState) => {
//     dispatch({ type: FORMS.SUBMIT });

//     const administrator = administratorBody(data);
//     const applicationId = selectedApplicationIdSelector(getState());
//     apiActionCreator(() => administrators.post(applicationId, administrator), dispatch, () => {
//       dispatch({ type: FORMS.SUBMIT_OK, model: ADMINISTRATOR.NAME });
//       dispatch(fetchAdministrators(ADMINISTRATOR.NAME, applicationId));
//     });
//   };
// }