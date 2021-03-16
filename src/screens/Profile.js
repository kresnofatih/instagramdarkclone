import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import ProfileBody from '../components/ProfileBody'

function Profile() {
    return (
        <ProfileContainer>
            <Page Content={ProfileBody}/>
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.div`
    width: 100%;
`