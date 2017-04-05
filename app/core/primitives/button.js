import styled from 'styled-components'
import Sip from 'sip.css'

import { colours } from '../style'

export const Button = styled.button`
  border-radius: 2px;
  color: ${ colours.white };
  background-color: ${ colours.jaak };
  cursor: pointer;

  ${ ({ sip }) => Sip({ ...Button.default.sip, ...sip }) }
`

Button.default = {
  sip: {
    fs: 3,
  },
}
