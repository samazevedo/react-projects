import styled from 'styled-components'

export const BgImage = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({ image }) => image}) no-repeat center center/cover;
`
