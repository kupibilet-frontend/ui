const createE2EId = (id, additionalParams = {}) => {
  if (/undefined/.test(id)) return

  const additionalKeys = Object.keys(additionalParams)
  const paramsArray = additionalKeys.length > 0
    ? additionalKeys.map((item) => {
      return { [`data-test-${item}`]: additionalParams[item] }
    })
    : []
  const dataAttributesObj = paramsArray.length > 0 ? Object.assign(...paramsArray) : undefined
  return {
    'data-test-id': id,
    ...dataAttributesObj,
  }
}

export default createE2EId
