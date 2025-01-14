import './App.css'
import { PromiseError } from './components/ErrorBoundaryExamples';
// import {  Button, ColorRed, ThemeProvider } from './components';
// import { BookReader, FocusInput, Modal, PhoneBook, ShoppingCart } from './components';
// import { Modal } from './components';
// import { useModalContext } from './components/Modal/context/ModalContext';
// import { useFetch } from './hooks';

//Va fuera porque no es parte del componente, esta es una forma de estilar
// const style = {
//   button: {
//     color: "blue",
//     backgroundColor: "grey",
//   }
// }

//Se puede estilar usando className o la propiedad style
//La forma correcta es usar el import del ./App.css

// const url = "https://api.example.com/data";

// interface Data {

//   name: string;
//   lastName: string;
//   age: number;
// }

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

  // const {data, error, loading} = useFetch<Data>(url);


  // if (loading) {

  //   return <div>Cargando.....</div>
  // }

  // if (error) {

  //   return <div>Ups! hay un error: {error.message}</div>
  // }


  // const handleClick = () => {

  //   console.log("");

  // }

  // const dimeHola = () => {
  //   alert("hola !!");
  // }

  // const submit = () => {
  //   console.log("submitted");
  // }

  // const { setState } = useModalContext();

  // const openModal = () => {

  //   setState(true);
  //   throw new Error("Se murio el tio de pampita");
  // }

  return (
    // <ThemeProvider>
    //     <ColorRed>
    //         <Button>
    //             Cambiar Tema
    //         </Button>
    //     </ColorRed>
    // </ThemeProvider>
    <>
      {/* <BookReader></BookReader>
      <FocusInput></FocusInput>
      <ShoppingCart></ ShoppingCart>
      <PhoneBook></ PhoneBook> */}
      <>
        {/* <Modal>
          <h2>Hola EVZODA</h2>
          <h3>Te quiero</h3>
        </Modal>
        <button onClick={openModal}>Abrete</button> */}
        {/* <UndefinedExample/> */}
        {/* <EffectExample></EffectExample> */}
        <PromiseError></PromiseError>
      </>
    </>

  );

}

export default App
