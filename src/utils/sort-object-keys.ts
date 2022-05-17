export const sortObjKeysAlphabetically = <T>(obj: T) =>
  Object.keys(obj)
    .sort((a, b) => (a > b ? 1 : -1))
    .reduce((result, key) => {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      result[key] = obj[key];
      return result;
    }, {}) as T;
