import styled from 'styled-components';
import { H1, H3, Timezone } from './Typography'
import { formatTime } from '../utils/formatUtils'

const StyledClockTime = styled(H1)``

export default function ClockTime({ currentTime, timezoneAbbr}) {
  
  return (
    <StyledClockTime>
      <time>
        {`${formatTime(currentTime)}`}
        <Timezone>
          {timezoneAbbr}
        </Timezone>
      </time>
    </StyledClockTime>
  )
}
