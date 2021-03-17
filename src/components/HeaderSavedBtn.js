import React from 'react'
import styled from 'styled-components'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice';

function HeaderSavedBtn({currentScreen}) {
    const dispatch = useDispatch();
    const redirectToSaved = () => {dispatch(openScreen({screen: 'saved'}))}
    return (
        <HeaderSavedBtnContainer>
            {currentScreen==='saved' ? (
                <SavedSelected/>
            ):(
                <SavedUnselected onClick={redirectToSaved}/>
            )}
        </HeaderSavedBtnContainer>
    )
}

export default HeaderSavedBtn

const HeaderSavedBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 25px;
    }
`;

const SavedSelected = styled(BookmarkIcon)`
    color: var(--ig-lpurple);
`;

const SavedUnselected = styled(BookmarkBorderIcon)`
    :hover {
        cursor: pointer;
        color: var(--ig-lpurple);
    }
`;