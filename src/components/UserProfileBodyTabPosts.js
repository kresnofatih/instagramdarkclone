import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentFriendEmail } from '../features/friendSlice'
import styled from 'styled-components'
import ImageWrapper from './ImageWrapper';
import { db } from '../Fire';

function UserProfileBodyTabPosts() {
    const currentFriendEmail = useSelector(getCurrentFriendEmail);
    const [userProfilePosts, setUserProfilePosts] = useState([]);
    useEffect(()=>{
        const unsub = db
        .collection('posts')
        .where('email', '==', currentFriendEmail)
        .onSnapshot(snap=>{
            setUserProfilePosts(snap.docs.map(doc=>doc.data()))
        })

        return ()=>unsub();
    }, [])
    return (
        <UserProfileBodyTabPostsContainer>
            {userProfilePosts?.map(post=>(
                <ImageWrapper
                    key={post.email+post.postId}
                    imageURL={post.imageURL}
                    email={post.email}
                    postId={post.postId}
                    timestamp={post.timestamp}
                />
            )).sort((a, b)=>{
                return b?.props?.timestamp?.seconds-a?.props?.timestamp?.seconds;
            })}
        </UserProfileBodyTabPostsContainer>
    )
}

export default UserProfileBodyTabPosts

const UserProfileBodyTabPostsContainer = styled.div`
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding-bottom: 20px;
`;