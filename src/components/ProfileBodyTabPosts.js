import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { getCurrentUserEmail } from '../features/userSlice';
import { db } from '../Fire';
import ImageWrapper from './ImageWrapper';

function ProfileBodyTabPosts() {
    const currentUserEmail = useSelector(getCurrentUserEmail);
    const [profilePosts, setProfilePosts] = useState([]);
    useEffect(()=>{
        const unsub = db
        .collection('posts')
        .where('email', '==', currentUserEmail)
        .onSnapshot(snap=>{
            setProfilePosts(snap.docs.map(doc=>doc.data()))
        })

        return ()=>unsub();
    }, [])
    return (
        <ProfileBodyTabPostsContainer>
            {profilePosts?.map(post=>(
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
        </ProfileBodyTabPostsContainer>
    )
}

export default ProfileBodyTabPosts

const ProfileBodyTabPostsContainer = styled.div`
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding-bottom: 20px;
`;
