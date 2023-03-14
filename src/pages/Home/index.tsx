import { Container } from './styles'

import { AirQuality } from '../../components/AirQuality'
import { WeeklyForecast } from '../../components/WeeklyForecast'
import { WeatherNow } from '../../components/WeatherNow'

export function Home() {
  return (
    <Container>
      <WeatherNow />
      <AirQuality />
      <WeeklyForecast />
    </Container>
  )
}
