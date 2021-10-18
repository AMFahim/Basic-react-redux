import {incrementValue, decrementValue} from '../types';

const initialState = {
  count: 5
}

export default function (state = initialState, action){
  switch(action.type){
    case incrementValue:
      return{
        ...state,
        count: state.count + action.payLoad
      }
      case decrementValue:
        return{
          ...state,
          count: state.count - action.payLoad
        }
        default:
          return state
  }
}