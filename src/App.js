import React from 'react';
import './App.css';
import styled from 'styled-components'
import Home from './screens/Home';
import Explore from './screens/Explore';
import Liked from './screens/Liked';
import Saved from './screens/Saved';
import Profile from './screens/Profile';

function App() {
  return (
    <AppContainer>
      <AppContents>
        {/* <Home/> */}
        {/* <Explore/> */}
        {/* <Liked/> */}
        {/* <Saved/> */}
        <Profile/>
      </AppContents>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
  background-color: var(--ig-ddgray);
  display: flex;
  justify-content: center;
`;

const AppContents = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  background-color: var(--ig-ddgray);
`;