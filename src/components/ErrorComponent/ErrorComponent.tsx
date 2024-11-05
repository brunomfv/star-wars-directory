import styled from 'styled-components'

import yodaFacepalm from '../../assets/img/yoda-facepalm.jpeg'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
`

const ErrorComponent = () => {
    return (
        <Container>
            <Subtitle>
                <p>Oops, wrong, something went!</p>
                <p>This situation, our Jedis will handle.</p>
            </Subtitle>
            <ImageWrapper>
                <img src={yodaFacepalm} alt="Yoda Facepalm" />
            </ImageWrapper>
        </Container>
    )
}

export default ErrorComponent
