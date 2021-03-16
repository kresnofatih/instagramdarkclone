import React from 'react'
import styled from 'styled-components'
import ProfileBox from './ProfileBox'
import GridOnIcon from '@material-ui/icons/GridOn';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import ImageWrapper from './ImageWrapper';

function ProfileBody() {
    return (
        <ProfileBodyContainer>
            <ProfileBox/>
            <ProfileBodyTabs>
                <ProfileBodyTabSelected>
                    <h3><GridOnIcon/>POSTS</h3>
                </ProfileBodyTabSelected>
                <ProfileBodyTabUnselected>
                    <h3><LocalOfferOutlinedIcon/>TAGGED</h3>
                </ProfileBodyTabUnselected>
            </ProfileBodyTabs>
            <ProfileBodyGallery>
                <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
                <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
                <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
                <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
                <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
                <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
                <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
                <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
                <ImageWrapper imageUrl={'https://i.pinimg.com/originals/c7/71/d3/c771d38887d5f58210ad747450e6e3a0.png'}/>
                <ImageWrapper imageUrl={'https://m.media-amazon.com/images/I/51n-h22UWOL._AC_.jpg'}/>
            </ProfileBodyGallery>
        </ProfileBodyContainer>
    )
}

export default ProfileBody

const ProfileBodyGallery = styled.div`
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding-bottom: 20px;
`

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
    border-top: 1px solid var(--ig-lpurple);

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
const ProfileBodyTabUnselected = styled.div`
    margin-top: -1px;
    padding: 10px 0;
    width: 150px;
    display: flex;
    justify-content: center;
    border-top: 1px solid transparent;
    
    > h3 {
        display: flex;
        font-size: 18px;
        align-items: center;
        color: gray;

        > .MuiSvgIcon-root {
            font-size: 16px;
            margin-right: 5px;
        }
    } 
`