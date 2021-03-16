import React from 'react'
import styled from 'styled-components'
import HomeSideProfile from './HomeSideProfile'
import HomeSideSuggest from './HomeSideSuggest'

function HomeSide() {
    return (
        <HomeSideContainer>
            <HomeSideProfile/>
            <HomeSideSuggest/>
        </HomeSideContainer>
    )
}

export default HomeSide

const HomeSideContainer = styled.div`
    flex: 0.3;
`;