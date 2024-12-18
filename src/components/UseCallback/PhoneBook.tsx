// Objetivo: se utiliza para memorizar una instancia de una función
// hace que un hijo no renderice

import { memo, useCallback, useState } from "react";

// Ejemplo:
// Supongamos que tenés un número de telefono al que llamas con frecuencia
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos
// del teléfono
// A menos que el número cambie siempre utilizo el mismo contacto

interface Contact{

    id: number;
    name: string;
    phone: string;
}

interface ContactProps{

    contact: Contact;
    onCall: (phone:string) => void;
}

const ContactCard = memo(({contact, onCall} : ContactProps) => {

    console.log(`Renderizando contacto  ${contact.name}`);
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Teléfono: {contact.phone}</p>
            <button onClick={() => onCall(contact.name)}>Llamar</button>
        </div>
    )
})


export const PhoneBook = () => {

    const [contacts, setContacts] = useState<Contact[]>([
        {
            id: 1, name: "Manzana", phone: "123-456-7890"
        },
        {
            id: 2, name: "Pera", phone: "123-456-7890"
        },
        {
            id: 3, name: "Leche", phone: "123-456-7890"
        }
    ]);

    const [log, setLog] = useState<string>('');

    const makeCall = useCallback((name: string) => {
        setLog(`Llamando al ${name}`);
        console.log(name);
        
    }, []);

    const addContact = () => {

        const newContact = {

            id: contacts.length + 1,
            name: `Contacto ${contacts.length + 1}`,
            phone: `${Math.floor(100000000 + Math.random() + 900000000)}`
        }

        setContacts([...contacts, newContact]);
    }
        
    return (
        <div>
            <h2>Agenda de contactos</h2>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall}>
                </ContactCard>
            ))}
            <button onClick={addContact}>Agregar Contacto</button>
            <p>{log}</p>
        </div>
    )
}