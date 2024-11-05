import { useState } from 'react'

import styled from 'styled-components'

import startWarsLogo from '../../assets/logo/logo.svg'

import chewbacca from '../../assets/icon/chewbacca.svg'

import darthVader from '../../assets/icon/darth-vader.svg'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 20px;
    box-shadow: ${({ theme }) => theme.shadow};
    margin-bottom: 20px;

    .star-wars-logo {
        height: 100%;
        width: auto;
        fill: ${({ theme }) => theme.colors.primary};
    }

    a {
        cursor: pointer;
    }
`

interface HeaderProps {
    onThemeChange: () => void
}

const Header = ({ onThemeChange }: HeaderProps) => {
    const [isDarkSide, setIsDarkSide] = useState(false)

    const handleThemeChange = () => {
        setIsDarkSide(!isDarkSide)
        onThemeChange()
    }

    return (
        <StyledHeader>
            <img
                src={startWarsLogo}
                className="star-wars-logo"
                alt="Star Wars Logo"
                data-testid="star-wars-logo"
            />

            <a href="#" onClick={handleThemeChange} data-testid="theme-toggle">
                {isDarkSide && (
                    <img
                        src={chewbacca}
                        className="logo"
                        alt="Chewbacca"
                        data-testid="light-theme-toggle"
                    />
                )}
                {!isDarkSide && (
                    <img
                        src={darthVader}
                        className="logo"
                        alt="Darth Vader"
                        data-testid="dark-theme-toggle"
                    />
                )}
            </a>
        </StyledHeader>
    )
}

export default Header
