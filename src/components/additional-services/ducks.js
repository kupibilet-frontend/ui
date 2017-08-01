import { CHANGE } from 'redux-form/es/actionTypes'

export const initialState = {
  additionalServices: [],
}

export default {
  booking: (state = initialState, { type, meta, payload }) => {
    const { additionalServices } = state
    switch (type) {
      case CHANGE:
        return meta.form !== 'booking' || meta.field !== 'foobar' ? state : {
          ...state,
          additionalServices: [
            ...additionalServices,
            payload,
          ],
        }
      default:
        return state
    }
  },
}
