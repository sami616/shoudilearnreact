import React from 'react'
import styled from 'styled-components'

const App = () => (
  <Wrap>
    <h1>Yes</h1>
  </Wrap>
)
export default App

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  h1 {
    margin: 0;
    font-size: 70px;
  }
`
