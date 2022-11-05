import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';
import bgLgDay from '../assets/desktop/bg-image-daytime.jpg'
import bgLgNight from '../assets/desktop/bg-image-nighttime.jpg'
import bgMedDay from '../assets/tablet/bg-image-daytime.jpg'
import bgMedNight from '../assets/tablet/bg-image-nighttime.jpg'
import bgSmDay from '../assets/mobile/bg-image-daytime.jpg'
import bgSmNight from '../assets/mobile/bg-image-nighttime.jpg'


const Styled = styled.div`
  --bgImgDay: url(${bgLgDay});
  --bgImgNight: url(${bgLgNight});
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  background-image: ${({ theme }) => theme.type === 'day' ? 'var(--bgImgDay)' : 'var(--bgImgNight)'};
  backdrop-filter: blur(1.25rem);  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  /* opacity: .5; */


  @media screen and ${breakpoints.tabletSm} {
    --bgImgDay: url(${bgMedDay});
  --bgImgNight: url(${bgMedNight});
}
  @media screen and ${breakpoints.mobile} {
    --bgImgDay: url(${bgSmDay});
  --bgImgNight: url(${bgSmNight});
}
`

export default function Background() {
  return (
    <Styled>
    
    </Styled>
    )
}