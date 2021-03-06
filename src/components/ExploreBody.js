import React from 'react'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper'

function ExploreBody() {
    return (
        <ExploreBodyContainer>
            
        </ExploreBodyContainer>
    )
}

export default ExploreBody

const ExploreBodyContainer = styled.div`
    height: calc(100vh - 71px);
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;
`