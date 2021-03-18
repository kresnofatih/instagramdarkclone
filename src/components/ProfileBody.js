import React, { useState } from 'react'
import styled from 'styled-components'
import ProfileBox from './ProfileBox'
import GridOnIcon from '@material-ui/icons/GridOn';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import ImageWrapper from './ImageWrapper';
import ProfileBodyTabPosts from './ProfileBodyTabPosts';
import ProfileBodyTabTagged from './ProfileBodyTabTagged';

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
                        <ProfileBodyTabUnselected onClick={()=>setTab('tagged')}>
                            <h3><LocalOfferOutlinedIcon/>TAGGED</h3>
                        </ProfileBodyTabUnselected>
                    </>
                }
                {tab==='tagged' &&
                    <>
                        <ProfileBodyTabUnselected onClick={()=>setTab('posts')}>
                            <h3><GridOnIcon/>POSTS</h3>
                        </ProfileBodyTabUnselected>
                        <ProfileBodyTabSelected>
                            <h3><LocalOfferOutlinedIcon/>TAGGED</h3>
                        </ProfileBodyTabSelected>
                    </>
                }
            </ProfileBodyTabs>
            {tab==='posts' &&
                <ProfileBodyTabPosts/>
            }
            {tab==='tagged' &&
                <ProfileBodyTabTagged/>
            }
        </ProfileBodyContainer>
    )
}

export default ProfileBody

// const ProfileBodyGallery = styled.div`
//     padding-top: 20px;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-gap: 20px;
//     padding-bottom: 20px;
// `

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