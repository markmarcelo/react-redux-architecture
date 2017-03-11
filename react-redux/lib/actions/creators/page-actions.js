import * as types from '../action-types';

/*
 * action creators
 */

export default function getClickTrackAction(target) {
  return {
    type: types.CLICK_TRACK,
    button: target,
  };
}
