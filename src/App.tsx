import './App.css'
import { useFetch } from './hooks';

//Va fuera porque no es parte del componente, esta es una forma de estilar
// const style = {
//   button: {
//     color: "blue",
//     backgroundColor: "grey",
//   }
// }

//Se puede estilar usando className o la propiedad style
//La forma correcta es usar el import del ./App.css

const url = "https://api.example.com/data";

interface Data {

  name: string;
  lastName: string;
  age: number;
}

function App() {

  //Los componentes solo cambia por 3 cosas
  // 1 - renderizado
  // 2 - cambio de estado
  // 3 - async

  

  // comunicarnos con un endpoint - entidad externa al componente
  // operaciones async
  // parametros de entrada

  // sync con entidades externas
  // useEffect(() => {
  //   //logica ? que logica ? cuando se ejecuta esta logica?

  //   //1 - cuando se monta el componente
  //   //2 - cada vez que se modifique uno de los valores del state

  //   fetchData();
  //   return () => {
  //     //liberar memoria
  //     //manejar el estado de la memoria
  //   }
  // }, [])

  const {data, error, loading} = useFetch<Data>(url);


  if (loading) {

    return <div>Cargando.....</div>
  }

  if (error) {

    return <div>Ups! hay un error: {error.message}</div>
  }


  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )

}

export default App
