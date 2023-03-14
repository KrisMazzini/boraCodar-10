import { ReactNode } from 'react'

import { Container, ContainerProps, Header } from './styles'

interface CardProps extends ContainerProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
}

export function Card({ children, title, icon, ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <Header>
        {icon}
        <span>{title}</span>
      </Header>
      {children}
    </Container>
  )
}
