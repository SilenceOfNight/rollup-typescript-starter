export const is = (type: string) => (target: any) => {
  return Object.prototype.toString.call(target) === `[object ${type}]`;
};

export const isArray = is('Array');
export const isBoolean = is('Boolean');
export const isFunction = is('Function');
export const isNull = is('Null');
export const isNumber = is('Number');
export const isObject = is('Object');
export const isString = is('String');
export const isSymbol = is('Symbol');
export const isUndefined = is('Undefined');
