import {incrementValue, decrementValue} from '../types'


export const increment = (a) => {
  return {
    type: incrementValue,
    payLoad: a
  }
}

export const decrement = (a) => {
  return {
    type: decrementValue,
    payLoad: a
  }
}