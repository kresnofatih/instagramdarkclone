import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HomeFeedPost from './HomeFeedPost'
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../Fire'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../features/userSlice'

function HomeFeed() {
    const currentUser = useSelector(getCurrentUser);
    const [homeposts, setHomePosts] = useState([]);
    useEffect(()=>{
        const unsub = db
        .collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snap=>{
            setHomePosts(snap.docs.map(doc=>doc.data()))
        })

        return ()=>unsub();
    }, [])
    return (
        <HomeFeedContainer>
            {homeposts?.map(post=>(
                <HomeFeedPost
                    key={post.email+post.postId}
                    displayName={post.displayName}
                    email={post.email}
                    imageURL={post.imageURL}
                    photoURL={post.photoURL}
                    postDesc={post.postDesc}
                    postHashtags={post.postHashtags}
                    postId={post.postId}
                    postTags={post.postTags}
                    timestamp={post.timestamp}
                    usersLiked={post.usersLiked}
                    usersSaved={post.usersSaved}
                />
            ))}
        </HomeFeedContainer>
    )
}

export default HomeFeed

const HomeFeedContainer = styled.div`
    height: calc(100vh - 71px);
    flex: 0.7;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
`;