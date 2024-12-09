import "./Button.css"

interface Props {

    label: string,
    parentMethod: () => void
}

//El parentmethod funciona trabajando por referencia
export const Button = ({label, parentMethod} : Props) => {

    return (
        <div className="card">
            <button className='custom-button' onClick={ parentMethod }>
                {label}
            </button>
        </div>)
}