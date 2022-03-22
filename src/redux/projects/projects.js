/* eslint no-case-declarations: "error" */
/* eslint-env es6 */
const ADD_PROJECT = 'ADD_PROJECT';
const REMOVE_PROJECT = 'REMOVE_PROJECT';
const UPDATE_TIME = 'UPDATE_PRODUCT';
export const addProject = (payload) => ({
  type: ADD_PROJECT,
  payload,
});

export const removeProject = (payload) => ({
  type: REMOVE_PROJECT,
  payload,
});

export const updateTime = (payload) => ({
  type: UPDATE_TIME,
  payload,
});
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [action.payload, ...state];

    case REMOVE_PROJECT:
      return state.filter((item) => item.id !== action.payload);

    case UPDATE_TIME: {
      const data = state.map((element) => {
        if (element.id === action.payload.id) {
          return { id: element.id, projectName: element.projectName, time: action.payload.time };
        }
        return element;
      });

      return [...data];
    }
    default:
      return state;
  }
};

export default reducer;
