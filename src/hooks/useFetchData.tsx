import { useState, useEffect } from 'react'

type QueryParams = Record<string, string>

type FetchDataArgs = {
    uri: string
    queryParams?: QueryParams
}

const useFetchData = <T,>({ uri, queryParams }: FetchDataArgs) => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [hasError, setHasError] = useState<boolean>(false)
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const queryString = queryParams
        ? new URLSearchParams(queryParams).toString()
        : ''

    useEffect(() => {
        setIsFetching(true)

        let mounted = true

        const fetchData = async () => {
            try {
                const response = await fetch(
                    uri + (queryString ? `?${queryString}` : '')
                )

                if (!response.ok) {
                    setHasError(true)
                }

                const data = await response.json()

                if (mounted) {
                    setData(data)
                    setIsLoading(false)
                    setIsFetching(false)
                }
            } catch {
                setHasError(true)
                setIsLoading(false)
                setIsFetching(false)
            }
        }

        fetchData()

        return () => {
            mounted = false
        }
    }, [uri, queryString])

    return { data, isLoading, hasError, isFetching }
}

export default useFetchData
