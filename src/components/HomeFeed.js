import React from 'react'
import styled from 'styled-components'
import HomeFeedPost from './HomeFeedPost'

function HomeFeed() {
    return (
        <HomeFeedContainer>
            <HomeFeedPost/>
            <HomeFeedPost/>
            <HomeFeedPost/>
            <HomeFeedPost/>
        </HomeFeedContainer>
    )
}

export default HomeFeed

const HomeFeedContainer = styled.div`
    height: calc(100vh - 71px);
    flex: 0.7;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
`;