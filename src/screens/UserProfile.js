import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Page from '../components/Page'
import UserProfileBody from '../components/UserProfileBody'
import { getCurrentFriendEmail, listenToFriendDataInDb, updateFriendSlice } from '../features/friendSlice'

function UserProfile() {
    const currentFriendEmail = useSelector(getCurrentFriendEmail);
    const dispatch = useDispatch();
    useEffect(()=>{
        listenToFriendDataInDb(
            currentFriendEmail,
            (userData)=>{dispatch(updateFriendSlice(userData))}
        )
    }, [currentFriendEmail])
    return (
        <UserProfileContainer>
            <Page Content={UserProfileBody}/>
        </UserProfileContainer>
    )
}

export default UserProfile

const UserProfileContainer = styled.div`
    width: 100%;
`;