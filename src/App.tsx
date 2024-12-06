import { useState } from 'react'
import './App.css'
import { Button } from './components'

//Va fuera porque no es parte del componente, esta es una forma de estilar
// const style = {
//   button: {
//     color: "blue",
//     backgroundColor: "grey",
//   }
// }

//Se puede estilar usando className o la propiedad style
//La forma correcta es usar el import del ./App.css
function App() {
  const [count, setCount] = useState(0);

  const countMore = () => {

    setCount((count) => count + 1);
  }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}/>
    </>
  )
}

export default App
