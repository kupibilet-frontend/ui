const createTestId = (id, additionalParams = {}) => {
  if (!/debug=true/.test(window.parent.location.href) || !/debug=true/.test(window.location.href)) return
  const additionalKeys = Object.keys(additionalParams)
  const paramsArray = additionalKeys.length > 0 ?
    additionalKeys.map((item) => {
      return { [`data-test-${item}`]: additionalParams[item] }
    })
    : []
  const dataAttributesObj = paramsArray.length > 0 ? Object.assign(...paramsArray) : undefined
  return {
    'data-test-id': id,
    ...dataAttributesObj,
  }
}

export default createTestId
