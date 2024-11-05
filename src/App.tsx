import { useState } from 'react'

import GlobalStyles from './styles/GlobalStyles'

import styled, { ThemeProvider } from 'styled-components'

import { starWarsTheme } from './theme/theme'

import Header from './components/Header/Header'

import CharacterList from './components/CharacterList/CharacterList'

const Title = styled.h1`
    margin-bottom: 20px;
`

function App() {
    const [isDarkSide, setIsDarkSide] = useState(false)

    const toggleTheme = () => {
        setIsDarkSide(!isDarkSide)
    }

    return (
        <ThemeProvider
            theme={
                isDarkSide ? starWarsTheme.darkSide : starWarsTheme.lightSide
            }
        >
            <GlobalStyles />

            <Header onThemeChange={toggleTheme} />

            <Title>Character Directory</Title>

            <CharacterList />
        </ThemeProvider>
    )
}

export default App
