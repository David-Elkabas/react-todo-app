import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchHook = (url) =>{
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // for cancelling the fetch request
        const source = axios.CancelToken.source();
        async function getData(){
            setIsLoading(true)
            try{
                const response = await axios.get(url, { cancelToken: source.token })
                setResult(response.data)
            }catch(error){
                console.log(error);
                setError(error.message)
            }
            setIsLoading(false)
        }
        
        getData()
        //cleanUp function. called when the component unmount 
        return () => {
            source.cancel();
        }
    }, [url])
    return [result, error, isLoading ]
}
 