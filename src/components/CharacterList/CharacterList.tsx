import { useState } from 'react'

import styled from 'styled-components'

import useFetchData from '../../hooks/useFetchData'

import useDebounce from '../../hooks/useDebounce'

import { Character } from '../../types/character'

import { IPageResult } from '../../types/page-result'

import Input from '../common/Input/Input'

import Button from '../common/Button/Button'

import Paginator from '../common/Paginator/Paginator'

import CharacterTable from '../CharacterTable/CharacterTable'

import Loader from '../Loader/Loader'

import ErrorComponent from '../ErrorComponent/ErrorComponent'

const apiUrl = import.meta.env.VITE_API_URL

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`

const StyledInput = styled(Input)`
    width: calc(${({ theme }) => theme.sizes.containerWidth} / 2);
`

const Actions = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.containerWidth};
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.containerWidth};
    display: flex;
    justify-content: flex-end;
`

const CharacterList = () => {
    const currentLocation = new URL(window.location.href)

    const searchParam = currentLocation.searchParams.get('search') || ''

    const pageParam = Number(currentLocation.searchParams.get('page')) || 1
    
    const [page, setPage] = useState(pageParam)

    const [search, setSearch] = useState(searchParam)

    const debouncedSearchValue = useDebounce(search, 500)

    const { data, isLoading, hasError, isFetching } = useFetchData<
        IPageResult<Character>
    >({
        uri: `${apiUrl}/people`,
        queryParams: {
            search: debouncedSearchValue,
            page: page.toString(),
        },
    })

    const updateUrlSearchParam = (key: string, value: string) => {
        if (!currentLocation.searchParams.has(key)) {
            currentLocation.searchParams.append(key, value)
        } else {
            currentLocation.searchParams.set(key, value)
        }

        window.history.pushState({}, '', currentLocation.href)
    }

    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        updateUrlSearchParam('search', event.target.value)

        setSearch(event.target.value)
    }

    const handlePreviousPageClick = () => {
        if (page > 1) {
            updateUrlSearchParam('page', (page - 1).toString())

            setPage(page - 1)
        }
    }

    const handleNextPageClick = () => {
        updateUrlSearchParam('page', (page + 1).toString())

        setPage(page + 1)
    }

    const handleClearClick = () => {
        setSearch('')
    }

    return (
        <Container>
            {hasError && <ErrorComponent />}

            {!hasError && isLoading && <Loader />}

            {!hasError && !isLoading && data?.results && (
                <>
                    <Actions>
                        <StyledInput
                            type="text"
                            value={search}
                            placeholder="Search for a character"
                            onChange={handleSearchInputChange}
                            data-testid="search-input"
                        />

                        <Button
                            disabled={search.length === 0}
                            onClick={handleClearClick}
                            data-testid="clear-button"
                        >
                            Clear
                        </Button>
                    </Actions>

                    {isFetching && <Loader />}

                    {!isFetching && (
                        <CharacterTable characters={data.results} />
                    )}

                    <Wrapper>
                        <Paginator
                            pageResult={data}
                            onPreviousPageClick={handlePreviousPageClick}
                            onNextPageClick={handleNextPageClick}
                        />
                    </Wrapper>
                </>
            )}
        </Container>
    )
}

export default CharacterList
