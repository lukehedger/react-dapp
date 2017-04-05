import styled from 'styled-components'
import Sip from 'sip.css'

import { colours } from '../style'

export const Text = styled.p`
  color: ${ props => props.color && colours[props.color] || Text.default.color };

  ${ ({ sip }) => Sip({ ...Text.default.sip, ...sip }) }
`

Text.default = {
  color: colours.dark,
  sip: {
    fs: 4,
  },
}
