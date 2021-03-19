import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HomeFeedPost from './HomeFeedPost'
import { db } from '../Fire'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../features/userSlice'

function HomeFeed() {
    const currentUser = useSelector(getCurrentUser);
    const [homeposts, setHomePosts] = useState([]);
    useEffect(()=>{
        const followingPlusSelf = [currentUser.email].concat(currentUser.following);
        const unsub = db
        .collection('posts')
        .where('email', 'in', followingPlusSelf)
        .onSnapshot(snap=>{
            setHomePosts(snap.docs.map(doc=>doc.data()))
        })

        return ()=>unsub();
    }, [currentUser])
    return (
        <>
        {currentUser.following &&
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
                        timestamp={post.timestamp}
                        usersLiked={post.usersLiked}
                        usersSaved={post.usersSaved}
                    />
                )).sort((a, b)=>{
                    return b?.props?.timestamp?.seconds-a?.props?.timestamp?.seconds;
                })}
            </HomeFeedContainer>
        }
        </>
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