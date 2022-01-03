


const SEARCH_ARRAY_PARAM_SEPARATOR = '_'











export function getURLParamArray<T extends string>(
  search: string,
  paramName: string,
  validValues: string[] = []
) {
  const param = getURLParam<T>(search, paramName)
  return param === null
    ? []
    : (param
      .split(SEARCH_ARRAY_PARAM_SEPARATOR)
      .filter(item => validValues.includes(item as T)) as T[])
}

export function getURLParam<T extends string>(
  search: string,
  paramName: string
) {
  const param = new URLSearchParams(search).get(paramName) as T | null
  return param
}

