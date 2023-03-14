import styled from 'styled-components'

const PaddingSizes = {
  sm: '1.2rem',
  md: '1.6rem',
  lg: '3.2rem',
  xlg: '4rem',
} as const

export interface ContainerProps {
  padding?: keyof typeof PaddingSizes
}

export const Container = styled.div<ContainerProps>`
  min-width: 27.7rem;
  border-radius: 1rem;

  padding: ${(props) => PaddingSizes[props.padding || 'md']};
  padding-top: ${(props) =>
    PaddingSizes[props.padding === 'xlg' ? 'xlg' : 'lg']};

  background-color: ${(props) => props.theme['purple-700']};
  backdrop-filter: blur(10px);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  line-height: 1.9rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`
