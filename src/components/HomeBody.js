import React from 'react'
import styled from 'styled-components'
import HomeFeed from './HomeFeed'
import HomeSide from './HomeSide'

function HomeBody() {
    return (
        <HomeBodyContainer>
            <HomeFeed/>
            <HomeSide/>
        </HomeBodyContainer>
    )
}

export default HomeBody

const HomeBodyContainer = styled.div`
    display: flex;
`;