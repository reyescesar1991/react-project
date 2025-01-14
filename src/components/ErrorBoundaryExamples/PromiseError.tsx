import { useEffect, useState } from "react"

export const PromiseError = () => {

    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                throw new Error("La promesa hizo puff");
            } catch (err) {
                setData("Data dummy")
                if(err instanceof Error){
                    setError(err.message);
                }
            }
        }

        fetchData()
    }, [])

    if(error){
        // throw error;
        return <h1>Algo ha salido mal tio</h1>
    }

    return <div>{data}</div>
}