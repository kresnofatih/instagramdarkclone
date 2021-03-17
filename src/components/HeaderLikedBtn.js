import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function HeaderLikedBtn({currentScreen}) {
    const dispatch = useDispatch();
    const redirectToLiked = () => {dispatch(openScreen({screen: 'liked'}))}
    return (
        <HeaderLikedBtnContainer>
            {currentScreen==='liked' ? (
                <LikedSelected/>
            ):(
                <LikedUnselected onClick={redirectToLiked}/>
            )}
        </HeaderLikedBtnContainer>
    )
}

export default HeaderLikedBtn

const HeaderLikedBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 25px;
    }
`;

const LikedSelected = styled(FavoriteOutlinedIcon)`
    color: var(--ig-lpurple);
`;

const LikedUnselected = styled(FavoriteBorderOutlinedIcon)`
    :hover {
        cursor: pointer;
        color: var(--ig-lpurple);
    }
`;