import React from 'react'
import { Container } from 'semantic-ui-react'
import DropdownComponent from './state-dropdown';

const MainContainer = () => (
    <Container>
            <h1>Hospital per state</h1>
          <DropdownComponent/>
    </Container>
  )
  
  export default MainContainer