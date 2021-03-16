import React from 'react'
import styled from 'styled-components'
import LikedBody from '../components/LikedBody'
import Page from '../components/Page'

function Liked() {
    return (
        <LikedContainer>
            <Page Content={LikedBody}/>
        </LikedContainer>
    )
}

export default Liked

const LikedContainer = styled.div`
    width: 100%;
`