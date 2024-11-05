import styled from 'styled-components'

const Table = styled.table`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.containerWidth};
    margin: 20px auto;
    border-collapse: collapse;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    overflow: hidden;

    th,
    td {
        padding: 16px;
        text-align: left;
    }

    th {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: bold;
        font-family: ${({ theme }) => theme.fonts.header};
    }

    tr:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.accent};
    }

    tr:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.background};
    }

    tbody tr:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.textPrimary};
    }

    td {
        border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
    }
`

export default Table
