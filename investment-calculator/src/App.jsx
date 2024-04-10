import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

import { useState } from 'react';

const Values = {
  "initialInvestment": 0,
  "annualInvestment": 0,
  "expectedReturn": 0,
  "duration": 0,
};

function App() {
  const [ userInput, setUserInput ] = useState(Values);

  const inputIsValid = userInput.duration >= 1;

  function handleChangeValue(subject, value) {
    setUserInput(prevValues => {
      return {
        ...prevValues,
        [subject]: +value
      }
    })
  }

  return (
    <>
      <Header></Header>
      <section id="user-input">
        <div className="input-group">
          <p><UserInput subject="initialInvestment" onChangeValue={handleChangeValue}></UserInput></p>
          <p><UserInput subject="annualInvestment" onChangeValue={handleChangeValue}></UserInput></p>
        </div>
        <div className="input-group">
          <p><UserInput subject="expectedReturn" onChangeValue={handleChangeValue}></UserInput></p>
          <p><UserInput subject="duration" onChangeValue={handleChangeValue}></UserInput></p>
        </div>
      </section>
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  )
}

export default App
