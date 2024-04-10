import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  return (
    <>
      <Header></Header>
      <div id="user-input">
        <div className="input-group">
          <UserInput subject="initial investment"></UserInput>
          <UserInput subject="annual investment"></UserInput>
        </div>
        <div className="input-group">
          <UserInput subject="expected return"></UserInput>
          <UserInput subject="duration"></UserInput>
        </div>
      </div>
    </>
  )
}

export default App
