type StringValidator = (value: string) => boolean;
type NumberValidator = (value: number) => boolean;
type NumberLimitValidator = (value: number, limit: number) => boolean;


export const isIntegerValidator: StringValidator = (value: string): boolean => {
  return value != '' && Number.isInteger(Number(value));
};


export const isGreaterThanValidator: NumberLimitValidator = (value: number, limit: number): boolean => {
  return value > limit;
};


export const isLessThanValidator: NumberLimitValidator = (value: number, limit: number): boolean => {
  return value < limit;
};


export const isEvenValidator: NumberValidator = (value: number): boolean => {
  return value % 2 === 0;
};

