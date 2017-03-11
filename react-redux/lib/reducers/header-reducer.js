import * as types from '../actions/action-types';

const initialState = {
  logo: 'React Website',
  selectedKey: '',
  items: [
    { ckey: 0, label: 'HOME', route: '/', isSelected: true},
    { ckey: 1, label: 'GET STARTED', route: '/start', isSelected: false},
    { ckey: 2, label: 'GITHUB', route: 'https://www.github.com/dcarrsf/react-structure', isSelected: false}
  ]
};

const headerReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.NAVIGATE:
      return Object.assign({}, state, { selectedKey: action.selectedKey,
                                        items: state.items.map((item, i) => {
                                          item.isSelected = i === action.selectedKey;
                                          return item;
                                        })
                                    });
  }
  return state;

}

export default headerReducer;
