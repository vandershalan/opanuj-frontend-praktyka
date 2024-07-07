import { isEvenValidator, isGreaterThanValidator, isIntegerValidator, isLessThanValidator } from './validators.ts';


export function validate(value: string): string {

  if (!isIntegerValidator(value)) {
    return `This value is not an integer.`;
  }

  const intValue = Number(value);
  const minValue = 0;
  const maxValue = 100;

  if (isLessThanValidator(intValue, minValue)) {
    return `${value} is less than ${minValue}.`;
  }
  if (isGreaterThanValidator(intValue, maxValue)) {
    return `${value} is greater than ${maxValue}.`;
  }
  if (!isEvenValidator(intValue)) {
    return `${value} is not even.`;
  }

  return 'Valid value.';
}

