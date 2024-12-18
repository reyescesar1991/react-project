// objetivo 1: nos permite crear una referencia mutable que persiste durante
// ,todo el ciclo de vida del componente SIN causar un re-render

import { useRef, useState } from "react"

// objetivo 2: hacer referencia a un elemento del DOM

// Ejemplo: 
// Un marcador de un libro que utilizamos para guardar de la ultima posicion
// de la lectura
// NO modifica el contenido del libro

//El useRef crea una referencia interna que solo se usa forma interna

export const BookReader = () => {
    const currentPageRef = useRef<number>(1);
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        currentPageRef.current += 1;
        console.log(`Avanzaste a la página ${currentPageRef.current}`);
    }

    const previousPage = () => {

        if(currentPageRef.current === 1){
            console.log(`No se puede retroceder la página porque ya te encuentras en ${currentPageRef.current}`);
            return;
        }

        currentPageRef.current -= 1;
        console.log(`Retrocediste a la página ${currentPageRef.current}`);
        
    }

    const goToPage = (page: number) => {

        if(page < 1){
            console.log(`No se puede saltar a un valor imposible`);
            return;
        }

        currentPageRef.current = page;
        setCurrentPage(page);
        console.log(`Saltaste a la página ${currentPageRef.current}`);
        
    }

    return (
        <div>
            <h2>Lectura de libro</h2>
            <p>Página actual: {currentPageRef.current}</p>
            <p>Página actual [STATE]: {currentPage}</p>
            <button onClick={previousPage}>Página Anterior</button>
            <button onClick={nextPage}>Página siguiente</button>
            <button onClick={() => goToPage(50)}>Ir a la página 50</button>
        </div>
    )
}