import React from 'react'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper'

function SavedBody() {
    return (
        <SavedBodyContainer>
            <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
            <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
            <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
            <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
            <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
            <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
            <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
            <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
            <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
            <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
        </SavedBodyContainer>
    )
}

export default SavedBody

const SavedBodyContainer = styled.div`
    height: calc(100vh - 71px);
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;
`