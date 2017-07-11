const ADD_SERVICE = 'ADD_SERVICE'

export const addService = (service) => ({
  type: ADD_SERVICE,
  payload: service,
})

export const initialState = {
  additionalServices: [],
}

export default (state = initialState, { type, payload = {} }) => {
  const { additionalServices } = state
  switch (type) {
    case ADD_SERVICE:
      return {
        ...state,
        additionalServices: [
          ...additionalServices,
          payload,
        ],
      }
    default:
      return state
  }
}
