import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Comment from './Comment';
import { useDispatch } from 'react-redux';
import { updateFriendEmail } from '../features/friendSlice';
import { openScreen } from '../features/appSlice';
import LikeBtn from './LikeBtn';
import SaveBtn from './SaveBtn';
import CommentBtn from './CommentBtn';
import { db } from '../Fire';

function HomeFeedPost({
    displayName,
    email,
    imageURL,
    photoURL,
    postDesc,
    postHashtags,
    postId,
    timestamp,
    usersLiked,
    usersSaved
}) {
    const dispatch = useDispatch();
    const [displayComments, setDisplayComments] = useState([])
    useEffect(()=>{
        const unsubComments = db.collection('posts')
        .doc(email+postId).collection('comments').orderBy('timestamp', 'desc')
        .limit(3).onSnapshot(snap=>{
            setDisplayComments(snap?.docs?.map(doc=>doc.data()));
        })

        return ()=>unsubComments();
    }, [])
    return (
        <HomeFeedPostContainer>
            <HomeFeedPostHeader>
                <HomeFeedPostHeaderLeft onClick={()=>{
                    dispatch(updateFriendEmail({email: email}));
                    dispatch(openScreen({screen: 'friend'}));
                }}>
                    <HomeFeedPostAvatar src={photoURL} alt=""/>
                    <h3>{displayName}</h3>
                </HomeFeedPostHeaderLeft>

                <HomeFeedPostHeaderRight>
                    <MoreHorizIcon/>
                </HomeFeedPostHeaderRight>
            </HomeFeedPostHeader>

            <HomeFeedPostImageContainer>
                <img src={imageURL} alt=""/>
            </HomeFeedPostImageContainer>

            <HomeFeedPostActions>
                <HomeFeedPostActionsLeft>
                    <LikeBtn 
                        usersLiked={usersLiked} 
                        email={email}
                        postId={postId}
                    />
                    <CommentBtn
                        email={email}
                        postId={postId}
                    />
                </HomeFeedPostActionsLeft>

                <HomeFeedPostActionsRight>
                    <SaveBtn
                        usersSaved={usersSaved}
                        email={email}
                        postId={postId}
                    />
                </HomeFeedPostActionsRight>
            </HomeFeedPostActions>

            <h3>{usersLiked?.length+' likes'}</h3>
            <HomeFeedPostDesc>
                <h3>{displayName}</h3><p>{postDesc}</p>
            </HomeFeedPostDesc>
            <HomeFeedCommentsContainer>
                {displayComments?.map(cmt=>(
                    <Comment
                        key={cmt.displayName+cmt.text}
                        displayName={cmt.displayName}
                        photoURL={cmt.photoURL}
                        timestamp={cmt.timestamp}
                        text={cmt.text}
                    />
                ))}
            </HomeFeedCommentsContainer>
            <h4>{new Date(timestamp?.toDate()).toUTCString()}</h4>
        </HomeFeedPostContainer>
    )
}

export default HomeFeedPost

const HomeFeedCommentsContainer = styled.div`
    padding: 10px 0;
`;

const HomeFeedPostDesc = styled.div`
    display: flex;
    margin-left: 20px;

    > h3 {
        font-size: 14px;
    }

    > p {
        margin-left: 5px;
        font-size: 14px;
    }
`;

const HomeFeedPostContainer = styled.div`
    background-color: var(--ig-dgray);
    border: 1px solid var(--ig-lgray);
    margin-right: 20px;
    margin-bottom: 20px;
    padding-bottom: 10px;

    > h3 {
        font-size: 14px;
        margin-left: 20px;
    }
    > h4 {
        font-weight: 200;
        font-size: 12px;
        margin-left: 20px;
        color: gray;
    }
`;

const HomeFeedPostHeader = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const HomeFeedPostHeaderLeft = styled.label`
    margin-left: 20px;
    display: flex;
    align-items: center;

    > h3 {
        margin-left: 15px;
        font-weight: 600;
        font-size: 16px;
    }

    > .MuiAvatar-root {
        height: 30px;
        width: 30px;
    }

    :hover {
        cursor: pointer;
    }
`;

const HomeFeedPostHeaderRight = styled.div`
    margin-right: 20px;

    > .MuiSvgIcon-root {
        :hover {
            cursor: pointer;
            color: var(--ig-dorange);
        }
    }
`;

const HomeFeedPostAvatar = styled(Avatar)`
    :hover {
        cursor: pointer;
    }
`;

const HomeFeedPostImageContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;

    > img {
        max-width: 100%;
        max-height: 500px;
    }
`;

const HomeFeedPostActions = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HomeFeedPostActionsLeft = styled.div`
    margin-left: 20px;
    width: 60px;
    display: flex;
    justify-content: space-between;
`;

const HomeFeedPostActionsRight = styled.div`
    margin-right: 20px;
`;

const HomeFeedPostComments = styled.div``;