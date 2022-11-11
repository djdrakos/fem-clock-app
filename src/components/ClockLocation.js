import { H3 } from './Typography'

export default function ClockLocation({ location }) {
  return(
    <H3 as="p">
      in {location ? location : 'your location'}
    </H3>
  )
}