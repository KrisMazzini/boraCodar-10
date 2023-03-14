import styled from 'styled-components'

export const Container = styled.div`
  width: 14.7rem;
  flex-grow: 1;

  padding: 1.2rem 1.6rem;
  border-radius: 6px;

  display: grid;
  grid-template-areas: 'icon type' 'icon value';
  justify-content: left;
  align-items: center;
  column-gap: 1.2rem;

  background-color: ${(props) => props.theme['purple-transparent']};

  img {
    width: 3.2rem;
    height: 3.2rem;

    grid-area: icon;
    opacity: 0.4;
  }

  p:first-of-type {
    grid-area: type;

    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 400;

    text-transform: capitalize;

    color: ${(props) => props.theme['gray-100']};
  }

  p:last-of-type {
    grid-area: value;

    font-size: 1.8rem;
    line-height: 2.2rem;

    color: ${(props) => props.theme['gray-100']};

    span {
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`
