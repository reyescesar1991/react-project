import { useRef } from "react"

export const FocusInput = () => {

    //Se usa null porque al principio no esta renderizado
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {

        if(!inputRef.current){
            console.log('No existe la referencia al elemento');
            return
        }

        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef}  placeholder="Escribe algo aqui..."/>
            <button onClick={handleButtonClick}>Enfocar en el input</button>
        </div>
    )
}