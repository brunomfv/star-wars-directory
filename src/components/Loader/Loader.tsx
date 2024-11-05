import styled, { keyframes } from 'styled-components'

import LoaderImg from '../../assets/logo/death-star-loader.svg?react'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;

  .loader {
    animation: ${spin} infinite 2.5s linear;
    height: 8rem;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const Loader = () => {
    return (
        <StyledLoader>
            <LoaderImg className="loader" />
        </StyledLoader>
    )
}

export default Loader
