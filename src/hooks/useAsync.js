import { useState, useEffect } from 'react'

const useAsync = (asyncFn, dependencies = []) => {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const [prevPage, setPrevPage] = useState([])
  const [nextPage, setNextPage] = useState([])

  if (!Array.isArray(dependencies)) {
    dependencies = []
  }

  useEffect(() => {
    setLoading(true)

    asyncFn()
      .then(res => {
        setData(res)
        setPrevPage([res.hasPrevPage, res.prevPage])
        setNextPage([res.hasNextPage, res.nextPage])
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, dependencies) //eslint-disable-line

  return {
    data,
    error,
    loading,
    prevPage,
    nextPage,
  }
}

export default useAsync
