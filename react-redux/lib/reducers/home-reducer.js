import * as types from '../actions/action-types';

const initialState = {
  ui: {
    jumbo: 'BIG BOLD TEXT',
    detail: 'Lorum ipsum dollar chizmet elnmernder lucit pedeum.',
    button: 'GET STARTED'
  },
  route: '/start',
  clickTimes: 0
};

const homeReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.CLICK_TRACK:
      return Object.assign({}, state, { isClicked: true, clickTimes: state.clickTimes + 1 });
  }
  return state;
}

export default homeReducer;
