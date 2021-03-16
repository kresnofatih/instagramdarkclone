import React from 'react'
import styled from 'styled-components'
import ExploreBody from '../components/ExploreBody'
import Page from '../components/Page'

function Explore() {
    return (
        <ExploreContainer>
            <Page Content={ExploreBody}/>
        </ExploreContainer>
    )
}

export default Explore

const ExploreContainer = styled.div`
    width: 100%;
`;