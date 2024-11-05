import styled from 'styled-components'

import { IPageResult } from '../../../types/page-result'

import Button from '../Button/Button'

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

interface PaginatorProps<T> {
    pageResult: IPageResult<T>
    onPreviousPageClick: () => void
    onNextPageClick: () => void
}

const Paginator = <T,>({
    pageResult,
    onPreviousPageClick,
    onNextPageClick,
}: PaginatorProps<T>) => {
    return (
        <Container>
            <Button
                disabled={!pageResult.previous}
                onClick={onPreviousPageClick}
                data-testid="previous-button"
            >
                Previous
            </Button>

            <Button
                disabled={!pageResult.next}
                onClick={onNextPageClick}
                data-testid="next-button"
            >
                Next
            </Button>
        </Container>
    )
}

export default Paginator
