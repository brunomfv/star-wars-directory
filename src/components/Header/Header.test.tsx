import { describe, it, expect, vitest } from 'vitest'

import { render, screen, fireEvent } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import { starWarsTheme } from '../../theme/theme'

import Header from './Header'

describe('Header', () => {
    it('renders the Star Wars logo', () => {
        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Header onThemeChange={() => {}} />
            </ThemeProvider>
        )

        const logo = screen.getByTestId('star-wars-logo')

        expect(logo).toBeInTheDocument()
    })

    it('renders the light theme icon when isDarkSide is true', () => {
        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Header onThemeChange={() => {}} />
            </ThemeProvider>
        )

        const themeToggle = screen.getByTestId('theme-toggle')
        fireEvent.click(themeToggle)

        const chewbaccaIcon = screen.getByTestId('light-theme-toggle')

        expect(chewbaccaIcon).toBeInTheDocument()
    })

    it('renders the dark theme icon when isDarkSide is false', () => {
        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Header onThemeChange={() => {}} />
            </ThemeProvider>
        )

        const darthVaderIcon = screen.getByTestId('dark-theme-toggle')

        expect(darthVaderIcon).toBeInTheDocument()
    })

    it('calls the onThemeChange callback when the theme toggle is clicked', () => {
        const mockOnThemeChange = vitest.fn()

        render(
            <ThemeProvider theme={starWarsTheme.lightSide}>
                <Header onThemeChange={mockOnThemeChange} />
            </ThemeProvider>
        )

        const themeToggle = screen.getByTestId('theme-toggle')
        fireEvent.click(themeToggle)

        expect(mockOnThemeChange).toHaveBeenCalled()
    })
})
