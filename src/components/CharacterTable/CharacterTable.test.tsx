import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import { starWarsTheme } from '../../theme/theme'

import CharacterTable from './CharacterTable'

const characters = [
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
]

describe('CharacterTable', () => {
    it('renders character table with correct data', () => {
        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <CharacterTable characters={characters} />
            </ThemeProvider>
        )

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
})
