import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getCurrentUserEmail } from '../features/userSlice'
import { db } from '../Fire'
import ImageWrapper from './ImageWrapper'

function SavedBody() {
    const currentUserEmail = useSelector(getCurrentUserEmail);
    const [savedPosts, setSavedPosts] = useState([]);
    useEffect(()=>{
        const unsub = db
        .collection('posts')
        .where('usersSaved', 'array-contains', currentUserEmail)
        .onSnapshot(snap=>{
            setSavedPosts(snap.docs.map(doc=>doc.data()));
        })

        return ()=>unsub();
    }, [])
    return (
        <SavedBodyContainer>
            {savedPosts?.map(post=>(
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