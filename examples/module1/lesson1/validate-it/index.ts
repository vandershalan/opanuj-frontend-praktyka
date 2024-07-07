import { validate } from './validation/validation.ts';


function main() {
  const input: HTMLInputElement = document.querySelector('#input')!;
  const validateButton: HTMLButtonElement = document.querySelector('#validate-button')!;
  const cleanButton: HTMLButtonElement = document.querySelector('#clean-button')!;
  const result: HTMLDivElement = document.querySelector('#result')!;


  validateButton.addEventListener('click', () => {
    const validationMessage = validate(input.value);
    result.innerHTML = validationMessage;
  });

  cleanButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
