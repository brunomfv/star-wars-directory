import { beforeEach, describe, expect, it, vitest } from 'vitest'

import { render, screen, fireEvent } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import { starWarsTheme } from '../../theme/theme'

import CharacterList from './CharacterList'

vitest.mock('../../hooks/useFetchData', () => ({
    default: vitest.fn(() => ({
        data: {
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: 'Luke Skywalker',
                    height: '172',
                    mass: '77',
                    hair_color: 'blond',
                    skin_color: 'fair',
                    eye_color: 'blue',
                    birth_year: '19BBY',
                    gender: 'male',
                },
            ],
        },
        isLoading: false,
        hasError: false,
        isFetching: false,
    })),
}))

vitest.mock('../../hooks/useDebounce', () => ({
    default: vitest.fn((value: string) => value),
}))

describe('CharacterList', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <CharacterList />
            </ThemeProvider>
        )
    })

    it('renders character list with correct data', () => {
        expect(screen.getByTestId('search-input')).toBeInTheDocument()
        expect(screen.getByTestId('clear-button')).toBeInTheDocument()
        expect(screen.getByTestId('character-name')).toBeInTheDocument()
        expect(screen.getByTestId('character-height')).toBeInTheDocument()
        expect(screen.getByTestId('character-mass')).toBeInTheDocument()
        expect(screen.getByTestId('character-hair')).toBeInTheDocument()
        expect(screen.getByTestId('character-skin')).toBeInTheDocument()
        expect(screen.getByTestId('character-eye')).toBeInTheDocument()
        expect(screen.getByTestId('character-birth')).toBeInTheDocument()
        expect(screen.getByTestId('character-gender')).toBeInTheDocument()

        expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
        expect(screen.getByText('172')).toBeInTheDocument()
        expect(screen.getByText('77')).toBeInTheDocument()
        expect(screen.getByText('blond')).toBeInTheDocument()
        expect(screen.getByText('fair')).toBeInTheDocument()
        expect(screen.getByText('blue')).toBeInTheDocument()
        expect(screen.getByText('19BBY')).toBeInTheDocument()
        expect(screen.getByText('male')).toBeInTheDocument()
    })

    it('updates search value on input change', () => {
        const searchInput = screen.getByTestId(
            'search-input'
        ) as HTMLInputElement

        fireEvent.change(searchInput, { target: { value: 'Luke' } })

        expect(searchInput.value).toBe('Luke')
    })

    it('clears search value on clear button click', () => {
        const searchInput = screen.getByTestId(
            'search-input'
        ) as HTMLInputElement

        fireEvent.change(searchInput, { target: { value: 'Luke' } })

        const clearButton = screen.getByTestId('clear-button')

        fireEvent.click(clearButton)

        expect(searchInput.value).toBe('')
    })
})
