import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButton = (value) => {
    return (
      <button key={value} onClick={() => handleButtonClick(value)}>
        {value}
      </button>
    );
  };

  return (
    <div className="calculator">
      <div className="circle"></div>
      <div className="input">{input}</div>
      <div className="result">{result}</div>
      <div className="row">
        {renderButton("7")}
        {renderButton("8")}
        {renderButton("9")}
        {renderButton("/")}
      </div>
      <div className="row">
        {renderButton("4")}
        {renderButton("5")}
        {renderButton("6")}
        {renderButton("*")}
      </div>
      <div className="row">
        {renderButton("1")}
        {renderButton("2")}
        {renderButton("3")}
        {renderButton("-")}
      </div>
      <div className="row">
        {renderButton("0")}
        {renderButton(".")}
        {renderButton("=")}
        {renderButton("+")}
      </div>
      <div className="row">{renderButton("C")}</div>
    </div>
  );
};

export default Calculator;
