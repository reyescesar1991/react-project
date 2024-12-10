import { useEffect, useState } from 'react'
import './App.css'

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

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {

        throw new Error("Error al obtener los datos")
      }
      const jsonData = await response.json();
      setData(jsonData);

    } catch (err) {
      setError(err as string);
      console.log(err);

    } finally {

      setLoading(false)
    }
  }

  // comunicarnos con un endpoint - entidad externa al componente
  // operaciones async
  // parametros de entrada

  // sync con entidades externas
  useEffect(() => {
    //logica ? que logica ? cuando se ejecuta esta logica?

    //1 - cuando se monta el componente
    //2 - cada vez que se modifique uno de los valores del state

    fetchData();
    return () => {
      //liberar memoria
      //manejar el estado de la memoria
    }
  }, [])


  if (loading) {

    return <div>Cargando.....</div>
  }

  if (error) {

    return <div>Ups! hay un error: {error}</div>
  }


  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )

}

export default App
