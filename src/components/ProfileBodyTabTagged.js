import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { getCurrentUserEmail } from '../features/userSlice';
import { db } from '../Fire';
import ImageWrapper from './ImageWrapper';

function ProfileBodyTabTagged() {
    const [taggedPosts, setTaggedPosts] = useState([]);
    useEffect(()=>{
        const unsub = db
        .collection('posts')
        .where('postTags', 'array-contains', '@fatih1st')
        .onSnapshot(snap=>{
            setTaggedPosts(snap.docs.map(doc=>doc.data()))
        })

        return ()=>unsub();
    }, [])
    return (
        <ProfileBodyTabTaggedContainer>
            {taggedPosts?.map(post=>(
                <ImageWrapper
                    key={post.email+post.postId}
                    imageURL={post.imageURL}
                    email={post.email}
                    postId={post.postId}
                    timestamp={post.timestamp}
                />
            ))}
        </ProfileBodyTabTaggedContainer>
    )
}

export default ProfileBodyTabTagged

const ProfileBodyTabTaggedContainer = styled.div`
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding-bottom: 20px;
`
