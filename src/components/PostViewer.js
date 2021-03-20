import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPostViewerDocId, getCurrentPostViewer, updatePostViewerSlice } from '../features/postviewerSlice';
import Comment from './Comment';
import SendIcon from '@material-ui/icons/Send';
import { getCurrentUser } from '../features/userSlice';
import { db } from '../Fire';
import { commentPost } from '../actions/CommentActions';

function PostViewer({closeAction}) {
    const currentPostViewerDocId = useSelector(getCurrentPostViewerDocId);
    const dispatch = useDispatch();
    const currentPostViewer = useSelector(getCurrentPostViewer);
    const currentUser = useSelector(getCurrentUser);

    // post a new comment
    const [newComment, setNewCommment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const unsub1 = db.collection('posts').doc(currentPostViewerDocId).onSnapshot(snap=>{
            if(snap.exists){
                const postViewerData = snap.data();
                dispatch(updatePostViewerSlice(postViewerData));
            }
        });

        const unsub2 = db
        .collection('posts').doc(currentPostViewerDocId).collection('comments')
        .onSnapshot(snaps=>{
            if(!snaps.empty){
                setComments(snaps.docs.map(cmt=>cmt.data()));
            };
        })

        return ()=>{
            unsub1();
            unsub2();
        };
    }, [])
    return (
        <PostViewerContainer>
            <PostViewerImg>
                <img src={currentPostViewer.imageURL} alt=""/>
            </PostViewerImg>
            <PostViewerDetails>
                <PostViewerDetailsBox>
                    <PostViewerProfile>
                        <Avatar src={currentPostViewer.photoURL} alt=""/>
                        <PostViewerProfileInfo>
                            <h3>{currentPostViewer.displayName}</h3>
                            <p>{currentPostViewer.displayName}</p>
                        </PostViewerProfileInfo>
                    </PostViewerProfile>
                    <h4>{currentPostViewer.postDesc}</h4>
                    <h5>
                        {currentPostViewer?.postHashtags?.map(ht=>(
                            <p>{ht}</p>
                        ))}
                    </h5>
                    <h6>{new Date(currentPostViewer?.timestamp?.toDate()).toUTCString()}</h6>
                    <CloseIcon onClick={()=>{
                        closeAction();
                    }}/>
                </PostViewerDetailsBox>
                <PostViewerComments>
                    {comments?.map(cmt=>(
                        <Comment
                            displayName={cmt.displayName}
                            photoURL={cmt.photoURL}
                            timestamp={cmt.timestamp}
                            text={cmt.text}
                        />
                    )).sort((a, b)=>{
                        return b?.props?.timestamp?.seconds-a?.props?.timestamp?.seconds;
                    })}
                </PostViewerComments>
                <PostACommentBox>
                    <Avatar src={currentUser.photoURL} alt=""/>
                    <input 
                        onChange={e=>setNewCommment(e.target.value)}
                        value={newComment}
                        placeholder="Type A New Comment"
                        autoFocus
                    />
                    <SendIcon
                        onClick={()=>{
                            commentPost(currentUser, currentPostViewerDocId, newComment);
                            setNewCommment('');
                        }}
                    />
                </PostACommentBox>
            </PostViewerDetails>

        </PostViewerContainer>
    )
}

export default PostViewer

const PostViewerContainer = styled.div`
    display: flex;
    width: 1000px;
    height: 80vh;
`;

const PostViewerImg = styled.div`
    flex: 0.7;
    height: 100%;
    background-color: var(--ig-dgray);

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const PostViewerDetails = styled.div`
    position: relative;
    flex: 0.3;
    height: 100%;
    background-color: var(--ig-ddgray);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const PostACommentBox = styled.div`
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    padding: 10px 0;
    color: white;
    display: flex;
    align-items: center;
    background-color: var(--ig-ddgray);
    border-top: 1px solid rgba(255,255,255, 0.1);

    > input {
        flex-grow: 1;
        margin-left: 20px;
        background-color: transparent;
        border: none;
        color: white;
        outline: none;
        font-size: 14px;
        border-radius: 50ch;
    }
    > .MuiSvgIcon-root {
        flex-grow: 0;
        margin-right: 20px;
        :hover {
            cursor: pointer;
            color: var(--ig-lpurple);
        }
    }
    > .MuiAvatar-root {
        height: 25px;
        width: 25px;
        margin-left: 20px;
    }
`;

const PostViewerDetailsBox = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    flex: 0.3;
    flex-grow: 0;

    > .MuiSvgIcon-root {
        position: absolute;
        top: 10px;
        right: 10px;

        :hover {
            cursor: pointer;
            color: var(--ig-lpurple);
        }
    }

    > h4 {
        font-weight: 200;
        font-size: 14px;
    }

    > h5 {
        margin-top: 10px;
        display: flex;
        align-items: center;

        > p {
            margin-right: 5px;
        }
    }

    > h6 {
        margin: 10px 0;
        font-weight: 200;
        font-size: 14px;
        color: gray;
    }
`;

const PostViewerProfile = styled.div`
    display: flex;
    align-items: center;
`;

const PostViewerProfileInfo = styled.div`
    margin-left: 10px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    > h3 {
        font-weight: 400;
        font-size: 16px;
    }
    > p {
        font-weight: 200;
        color: gray;
        font-size: 14px;
    }
`;

const PostViewerComments = styled.div`
    border-top: 1px solid var(--ig-dgray);
    flex: 0.7;
    flex-grow: 1;
    margin-top: 20px;
    padding: 10px 0;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
`;