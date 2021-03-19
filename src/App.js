import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import Home from './screens/Home';
import Explore from './screens/Explore';
import Liked from './screens/Liked';
import Saved from './screens/Saved';
import Profile from './screens/Profile';
import Login from './Login';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './Fire'
import AuthLoading from './AuthLoading';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentScreen } from './features/appSlice';
import { getCurrentUser, initializeUserDataInDb, listenToUserDataInDb, updateUserSlice } from './features/userSlice';
import UserProfile from './screens/UserProfile';

function App() {
  const currentUser = useSelector(getCurrentUser);
  const currentScreen = useSelector(getCurrentScreen);
  const [account] = useAuthState(auth);
  const dispatch = useDispatch();
  useEffect(()=>{
    listenToUserDataInDb(
      account, 
      (userData)=>{dispatch(updateUserSlice(userData))},
      (accountEmail)=>{initializeUserDataInDb(accountEmail)}
    )
  }, [account])
  return (
    <AppContainer>
      {!account ? (
        <Login/>
      ):(
        <>
        {currentUser.email!=='displayName@instagram.co.qa' ? (
          <AppContents>
            {currentScreen==='home' &&
              <Home/>
            }
            {currentScreen==='explore' &&
              <Explore/>
            }
            {currentScreen==='liked' &&
              <Liked/>
            }
            {currentScreen==='saved' &&
              <Saved/>
            }
            {currentScreen==='profile' &&
              <Profile/>
            }
            {currentScreen==='friend' &&
              <UserProfile/>
            }
          </AppContents>
        ):(
          <AuthLoading/>
        )}
        </>
      )}
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