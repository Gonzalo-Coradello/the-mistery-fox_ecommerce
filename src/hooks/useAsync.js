import { useState, useEffect } from "react"


const useAsync = (asyncFn, dependencies = []) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    if(!Array.isArray(dependencies)) {
        dependencies = []
    }

    useEffect(() => {

        setLoading(true)

        asyncFn()
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
        }, dependencies)

        return {
            data,
            error,
            loading
        }
}

export default useAsync