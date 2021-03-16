import React from 'react'
import styled from 'styled-components'
import HomeBody from '../components/HomeBody';
import Page from '../components/Page';

function Home() {
    return (
        <HomeContainer>
            <Page Content={HomeBody}/>
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    width: 100%;
`;