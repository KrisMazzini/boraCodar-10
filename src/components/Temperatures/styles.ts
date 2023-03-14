import styled from 'styled-components'

export const Container = styled.span`
  color: ${(props) => props.theme.white};

  > span {
    color: ${(props) => props.theme['purple-100']};
  }
`
