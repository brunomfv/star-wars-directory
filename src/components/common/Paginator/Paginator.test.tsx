import { describe, it, expect, vitest } from 'vitest'

import { render, screen, fireEvent } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import { starWarsTheme } from '../../../theme/theme'

import Paginator from './Paginator'

const pageResult = {
    count: 11,
    previous: 'https://api.example.com/previous',
    next: 'https://api.example.com/next',
    results: [],
}

describe('Paginator', () => {
    it('renders previous and next buttons', () => {
        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Paginator
                    pageResult={pageResult}
                    onPreviousPageClick={() => {}}
                    onNextPageClick={() => {}}
                />
            </ThemeProvider>
        )

        const previousButton = screen.getByTestId('previous-button')
        const nextButton = screen.getByTestId('next-button')

        expect(previousButton).toBeInTheDocument()
        expect(nextButton).toBeInTheDocument()
    })

    it('calls onPreviousPageClick when previous button is clicked', () => {
        const onPreviousPageClick = vitest.fn()

        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Paginator
                    pageResult={pageResult}
                    onPreviousPageClick={onPreviousPageClick}
                    onNextPageClick={() => {}}
                />
            </ThemeProvider>
        )

        const previousButton = screen.getByTestId('previous-button')
        fireEvent.click(previousButton)

        expect(onPreviousPageClick).toHaveBeenCalled()
    })

    it('calls onNextPageClick when next button is clicked', () => {
        const onNextPageClick = vitest.fn()

        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Paginator
                    pageResult={pageResult}
                    onPreviousPageClick={() => {}}
                    onNextPageClick={onNextPageClick}
                />
            </ThemeProvider>
        )

        const nextButton = screen.getByTestId('next-button')
        fireEvent.click(nextButton)

        expect(onNextPageClick).toHaveBeenCalled()
    })

    it('disables previous button when there is no previous page', () => {
        const disabledPageResult = {
            count: 11,
            previous: null,
            next: 'https://api.example.com/next',
            results: [],
        }

        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Paginator
                    pageResult={disabledPageResult}
                    onPreviousPageClick={() => {}}
                    onNextPageClick={() => {}}
                />
            </ThemeProvider>
        )

        const previousButton = screen.getByTestId('previous-button')

        expect(previousButton).toBeDisabled()
    })

    it('disables next button when there is no next page', () => {
        const disabledPageResult = {
            count: 11,
            next: null,
            previous: 'https://api.example.com/previous',
            results: [],
        }

        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Paginator
                    pageResult={disabledPageResult}
                    onPreviousPageClick={() => {}}
                    onNextPageClick={() => {}}
                />
            </ThemeProvider>
        )

        const nextButton = screen.getByTestId('next-button')

        expect(nextButton).toBeDisabled()
    })
})
