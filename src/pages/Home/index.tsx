import { Container } from './styles'

import { AirQuality } from '../../components/AirQuality'
import { WeeklyForecast } from '../../components/WeeklyForecast'

export function Home() {
  return (
    <Container>
      <WeeklyForecast />
      <AirQuality />
    </Container>
  )
}
