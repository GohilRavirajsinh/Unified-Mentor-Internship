import { useCallback, useRef, useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [lenght, setLenght] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbole, setIncludeSymbole] = useState(false)
  const passwordRef = useRef()

  const generatePassword = useCallback(() => {
    const latters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeNumbers) latters += '0123456789'
    if (includeSymbole) latters += '!@#$%^&*'
    let characters = latters

    let createdPassword = ""; // to store password
    for (let i = 0; i < lenght; i++) {
      const randomValue = Math.floor(Math.random() * characters.length)
      createdPassword = characters[randomValue]
    }
    setPassword(createdPassword)
  }, [lenght, includeNumbers, includeSymbole, setPassword])

  return (
    <>
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
          <div className="mb-4">
            <input type="text" className="w-full p-2 border mb-2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Copy</button>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  )
}

export default App