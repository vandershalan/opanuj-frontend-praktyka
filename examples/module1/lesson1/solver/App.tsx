import { useState } from 'react';

import { Button } from './calculator/Button';
import { sum, subtract, multiply, divide } from './calculator/functions';
import { CalculationResult } from './calculator/CalculationResult';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>('');

  const calculateResult = (func: (firstNumber: number, secondNumber: number) => CalculationResult) => {
    const calcResult = func(firstNumber, secondNumber);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculateResult(sum)}>+</Button>
        <Button onClick={() => calculateResult(subtract)}>-</Button>
        <Button onClick={() => calculateResult(multiply)}>*</Button>
        <Button onClick={() => calculateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      <p>{error}</p>
    </div>
  );
};

export default App;
