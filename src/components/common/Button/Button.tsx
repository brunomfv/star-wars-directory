import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    padding: 10px 20px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.textPrimary};
        color: #ccc;
        cursor: not-allowed;
        opacity: 0.6;
        box-shadow: none;
    }
`

export default Button
