import { ReactNode } from "react"
import "./Button.css"

interface Props {

    children: ReactNode,
    parentMethod: () => void
}

interface ChildrenProps {
    children: ReactNode
}

export const ColorRed = ({ children } : ChildrenProps) => {
    return (<div className="color-red">{children}</div>)
}

//El parentmethod funciona trabajando por referencia
export const Button = ({children, parentMethod} : Props) => {

    return (
        <div className="card">
            <button className='custom-button' onClick={ parentMethod }>
                {children}
            </button>
        </div>)
}