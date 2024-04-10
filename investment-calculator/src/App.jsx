import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  return (
    <>
      <Header></Header>
      <div id="user-input">
        <UserInput subject="initial investment"></UserInput>
      </div>
    </>
  )
}

export default App
