import "./Button.css"

interface Props {

    label: string,
    parentMethod: () => void
}

export const Button = ({label, parentMethod} : Props) => {

    return (
        <div className="card">
            <button className='custom-button' onClick={ parentMethod }>
                {label}
            </button>
        </div>)
}