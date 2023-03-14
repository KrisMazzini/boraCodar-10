import styled from 'styled-components'

export const Container = styled.div`
  margin-right: 2rem;
  align-self: flex-end;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.7rem;

    color: ${(props) => props.theme['purple-100']};
  }
`
