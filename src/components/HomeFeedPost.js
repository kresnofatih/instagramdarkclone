import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Comment from './Comment';

function HomeFeedPost() {
    return (
        <HomeFeedPostContainer>
            <HomeFeedPostHeader>
                <HomeFeedPostHeaderLeft>
                    <HomeFeedPostAvatar src="https://i.pinimg.com/474x/34/30/a0/3430a061b7435ef0c58b1eff94453556.jpg" alt=""/>
                    <h3>yang.Terdalam</h3>
                </HomeFeedPostHeaderLeft>

                <HomeFeedPostHeaderRight>
                    <MoreHorizIcon/>
                </HomeFeedPostHeaderRight>
            </HomeFeedPostHeader>

            <HomeFeedPostImageContainer>
                <img src="https://i.imgur.com/hlMIFj7.jpg" alt=""/>
            </HomeFeedPostImageContainer>

            <HomeFeedPostActions>
                <HomeFeedPostActionsLeft>
                    <FavoriteBorderIcon/>
                    <ChatBubbleOutlineIcon/>
                </HomeFeedPostActionsLeft>

                <HomeFeedPostActionsRight>
                    <BookmarkBorderIcon/>
                </HomeFeedPostActionsRight>
            </HomeFeedPostActions>

            <h3>10,772 likes</h3>
            <HomeFeedPostDesc>
                <h3>yang.Terdalam</h3><p>Good Anime! 😁</p>
            </HomeFeedPostDesc>

            <HomeFeedCommentsContainer>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </HomeFeedCommentsContainer>
            <h4>Wed, 12 March 2021 21.23 WIB</h4>
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

const HomeFeedPostHeaderLeft = styled.div`
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

    > img {
        width: 100%;
        max-height: 700px;
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