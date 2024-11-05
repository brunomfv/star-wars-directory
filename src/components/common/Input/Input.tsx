import styled from 'styled-components'

const Input = styled.input`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.containerWidth};
    padding: 12px 16px;
    font-size: 1rem;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.textSecondary};
        color: #aaa;
        cursor: not-allowed;
        opacity: 0.6;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.textSecondary};
        opacity: 0.8;
    }
`

export default Input
