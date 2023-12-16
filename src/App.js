import './App.css';
import React, { useState } from "react";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  function allClear() {
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult(0);
  }

  function deleteLastChar() {
    if (currentOperation === "") {
      setNumber1(number1.slice(0, -1));
    } else {
      setNumber2(number2.slice(0, -1));
    }
  }

  function clickNumber(val) {
    if (currentOperation === "") {
      setNumber1(number1 + val);
    } else {
      setNumber2(number2 + val);
    }
  }

  function clickOperation(val) {
    setCurrentOperation(val);
  }

  function getResult() {
    switch (currentOperation) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
      default:
        setResult(0);
    }
  }

  return (
    <div className="calculator">
      <h1 className="title">calculadora</h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{currentOperation ? number1 + currentOperation : ""}</div>
          <div className="current-operand">{result ? result : (!currentOperation ? number1 : number2)}</div>
        </div>
        <button onClick={allClear} className="span-two clear-button">AC</button>
        <button onClick={deleteLastChar} className="delete-button">DEL</button>
        <button onClick={() => clickOperation("/")} className="operation-button">/</button>
        <button onClick={() => clickNumber(7)} className="number-button">7</button>
        <button onClick={() => clickNumber(8)} className="number-button">8</button>
        <button onClick={() => clickNumber(9)} className="number-button">9</button>
        <button onClick={() => clickOperation("*")} className="operation-button">*</button>
        <button onClick={() => clickNumber(4)} className="number-button">4</button>
        <button onClick={() => clickNumber(5)} className="number-button">5</button>
        <button onClick={() => clickNumber(6)} className="number-button">6</button>
        <button onClick={() => clickOperation("+")} className="operation-button">+</button>
        <button onClick={() => clickNumber(1)} className="number-button">1</button>
        <button onClick={() => clickNumber(2)} className="number-button">2</button>
        <button onClick={() => clickNumber(3)} className="number-button">3</button>
        <button onClick={() => clickOperation("-")} className="operation-button">-</button>
        <button onClick={() => clickNumber(".")} className="number-button">.</button>
        <button onClick={() => clickNumber(0)} className="number-button">0</button>
        <button onClick={getResult} className="span-two equals-button">=</button>
      </div>
    </div>
  );
}

export default App;
