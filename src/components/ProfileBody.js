import React, { useState } from 'react'
import styled from 'styled-components'
import ProfileBox from './ProfileBox'
import GridOnIcon from '@material-ui/icons/GridOn';
import ProfileBodyTabPosts from './ProfileBodyTabPosts';

function ProfileBody() {
    const [tab, setTab] = useState('posts');
    return (
        <ProfileBodyContainer>
            <ProfileBox/>
            <ProfileBodyTabs>
                {tab==='posts' &&
                    <>
                        <ProfileBodyTabSelected>
                            <h3><GridOnIcon/>POSTS</h3>
                        </ProfileBodyTabSelected>
                    </>
                }
            </ProfileBodyTabs>
            {tab==='posts' &&
                <ProfileBodyTabPosts/>
            }
        </ProfileBodyContainer>
    )
}

export default ProfileBody

const ProfileBodyContainer = styled.div`
    height: calc(100vh - 71px);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
    align-items: center;
`

const ProfileBodyTabs = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px solid gray;
`

const ProfileBodyTabSelected = styled.div`
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
const ProfileBodyTabUnselected = styled.label`
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