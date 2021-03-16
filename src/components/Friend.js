import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';

function Friend() {
    return (
        <FriendContainer>
            <FriendLeft>
                <FriendAvatar src="https://i.imgur.com/hlMIFj7.jpg" alt=""/>
                <FriendLeftInfo>
                    <h3>kresnofatih_</h3>
                    <p>kresnofatih_</p>
                </FriendLeftInfo>
            </FriendLeft>
            <FriendRight>
                <AddIcon/>
            </FriendRight>
        </FriendContainer>
    )
}

export default Friend

const FriendContainer = styled.div`
    padding: 10px 0;
    background-color: var(--ig-dorange);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FriendLeft = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const FriendLeftInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    > h3 {
        font-size: 16px;
        font-weight: 400;
    }
    > p {
        font-size: 14px;
        font-weight: 200;
        color: gray;
    }
`;

const FriendAvatar = styled(Avatar)`
    :hover {
        cursor: pointer;
    }
`;

const FriendRight = styled.div`
    margin-right: 10px;

    > .MuiSvgIcon-root {
        :hover {
            cursor: pointer;
            color: var(--ig-dorange);
        }
    }
`;