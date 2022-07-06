// import axios from "axios";
import { useState } from "react";
import { contractions } from "./contractions"

function App() {
  const [userValue, setUserValue] = useState("")
  const [pressedKey, setPressedKey] = useState()

  const translate = () => {
    if (userValue.includes("'ve") || userValue.includes("'d") ||
      userValue.includes("'s") || userValue.includes("'re")) {
      let part1 = userValue.substring(0, userValue.indexOf("'"))
      let items = contractions[userValue.substring(userValue.indexOf("'"), userValue.length)]
      let part2 = items[Math.floor(Math.random() * items.length)]
      let translatedWord = part1 + " " + part2 + " ";
      setUserValue(translatedWord)
    }
    else {
      let userWords = userValue.split(' ')
      let wordToCheck = userWords.pop()
      let items = contractions[wordToCheck]
      let translatedWord = ""
      if (items) { translatedWord = items[Math.floor(Math.random() * items.length)]; }
      if (!translatedWord) { translatedWord = userValue; setUserValue(translatedWord + " "); }
      else setUserValue(userWords.join(' ') + " " + translatedWord + " ");
    }
  }

  const handleInputChange = (event) => {
    let inputValue = event.target.value

    setUserValue(inputValue)
    if (pressedKey === 32) translate();
  }

  const getPressedKey = (event) => {
    setPressedKey(event.keyCode)
  }


  return (
    <div className="App">
      <br />
      <br />
      <input onChange={handleInputChange} onKeyDown={getPressedKey} type="text" value={userValue} />
      <br />
      <br />
      <br />
      <h1>{"translated text: " + userValue}</h1>
    </div >
  );
}

export default App;