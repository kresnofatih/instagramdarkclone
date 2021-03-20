import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';

function Comment({displayName, photoURL, text, timestamp}) {
    console.log(timestamp);
    return (
        <CommentContainer>
            <div>
            <Avatar src={photoURL} alt=""/>
            <h3>{displayName}<p>{text}</p></h3>
            </div>
                
            <h4>{new Date(timestamp?.toDate()).toLocaleDateString()}</h4>
        </CommentContainer>
    )
}

export default Comment

const CommentContainer = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 5px 0;
    padding-bottom: 5px;
    align-items: flex-start;

    > div {
        display: flex;
        
        > .MuiAvatar-root {
            margin-top: 5px;
            margin-left: 20px;
            height: 20px;
            width: 20px;
            margin-right: 10px;
        }
        > h3 {
            flex-direction: column;
            max-width: 250px;
            font-size: 14px;
            display: flex;
            align-items: flex-start;
            flex-direction: column; 
        }
        > h3 > p {
            padding: 2px 0;
            font-weight: 200 !important;
            font-size: 14px;
        }
    }

    > h4 {
        margin-right: 20px;
        font-weight: 100;
        margin-left: 20px;
        font-size: 12px;
    }
`;