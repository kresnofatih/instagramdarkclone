import React, { useState } from 'react'
import styled from 'styled-components'
import UserProfileBox from './UserProfileBox'
import GridOnIcon from '@material-ui/icons/GridOn';
import UserProfileBodyTabPosts from './UserProfileBodyTabPosts';

function UserProfileBody() {
    const [tab, setTab] = useState('posts');
    return (
        <UserBodyContainer>
            <UserProfileBox/>
            <UserProfileBodyTabs>
                {tab==='posts' &&
                    <>
                        <UserProfileBodyTabSelected>
                            <h3><GridOnIcon/>POSTS</h3>
                        </UserProfileBodyTabSelected>
                    </>
                }
            </UserProfileBodyTabs>
            {tab==='posts' &&
                <UserProfileBodyTabPosts/>
            }
        </UserBodyContainer>
    )
}

export default UserProfileBody

const UserBodyContainer = styled.div`
    height: calc(100vh - 71px);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
    align-items: center;
`;

const UserProfileBodyTabs = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px solid gray;
`;

const UserProfileBodyTabSelected = styled.div`
    margin-top: -1px;
    padding: 10px 0;
    width: 150px;
    display: flex;
    justify-content: center;
    border-top: 1px solid white;

    > h3 {
        display: flex;
        align-items: center;
        font-size: 18px;
        
        > .MuiSvgIcon-root {
            font-size: 16px;
            margin-right: 5px;
        }
    } 
`
const UserProfileBodyTabUnselected = styled.label`
    margin-top: -1px;
    padding: 10px 0;
    width: 150px;
    display: flex;
    justify-content: center;
    border-top: 1px solid transparent;

    :hover {
        border-top: 1px solid var(--ig-lpurple);
        cursor: pointer;
    }
    
    > h3 {
        display: flex;
        font-size: 18px;
        align-items: center;
        color: gray;

        :hover {
            color: var(--ig-lpurple);
        }

        > .MuiSvgIcon-root {
            font-size: 16px;
            margin-right: 5px;
        }
    } 
`