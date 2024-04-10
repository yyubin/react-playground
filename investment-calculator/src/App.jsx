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

  function handleChangeValue(subject, value) {
    setUserInput(prevValues => {
      return {
        ...prevValues,
        [subject]: value
      }
    })
  }

  return (
    <>
      <Header></Header>
      <div id="user-input">
        <div className="input-group">
          <UserInput subject="initialInvestment" onChangeValue={handleChangeValue}></UserInput>
          <UserInput subject="annualInvestment" onChangeValue={handleChangeValue}></UserInput>
        </div>
        <div className="input-group">
          <UserInput subject="expectedReturn" onChangeValue={handleChangeValue}></UserInput>
          <UserInput subject="duration" onChangeValue={handleChangeValue}></UserInput>
        </div>
      </div>
      <div id="result">
        <Result userInput={userInput}></Result>
      </div>
    </>
  )
}

export default App
