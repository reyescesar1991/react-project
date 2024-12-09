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

  //Los componentes solo cambia por 3 cosas
  // 1 - renderizado
  // 2 - cambio de estado
  // 3 - async

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Cesar");

  const countMore = () => {

    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  const changeName = () => {

    setName("CESAR");
  }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}/>
      <p>{name}</p>
      <Button label={`Name is ${name}`} parentMethod={changeName}/>
    </>
  )
}

export default App
