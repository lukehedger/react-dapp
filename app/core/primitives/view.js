import styled from 'styled-components'
import Sip from 'sip.css'

export const View = styled.div`

  ${ ({ sip }) => Sip({ ...View.default.sip, ...sip }) }
`

View.default = {
  sip: {
    p: 4,
  },
}
