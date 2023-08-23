import { useEffect, useState } from "react"
import { server_calls } from "../api/server";

export const useGetData =() => {
    const [ contactData, setData ] = useState<[]> ([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result) //getting the data and then setting the data to this
    }
    // useEFfect on mount
    useEffect(() => {
        handleDataFetch();
    }, []) // w/o the [] it will occur every single time usegetdata is used, but with [] it will only use it when it comes into existence

    return { contactData, getData:handleDataFetch}
}

//when writing a hook, you use the word use. "useGetData"
