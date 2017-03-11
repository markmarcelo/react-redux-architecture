import * as types from '../action-types';

/*
 * action creators
 */

export default function clickHeaderNav(id) {
  return {
    type: types.NAVIGATE,
    selectedKey: id,
  };
}
