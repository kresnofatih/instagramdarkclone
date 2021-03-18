import React, { useState } from 'react'
import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import ConfigurePost from './ConfigurePost';


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function HeaderPostBtn() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <HeaderPostBtnContainer>
                <Tooltip title="Post">
                    <AddAPhotoOutlinedIcon onClick={handleToggle}/>
                </Tooltip>
            </HeaderPostBtnContainer>
            {open &&
                <Backdrop className={classes.backdrop} open={open}>
                    <ConfigurePost closeConfigurePost={handleClose}/>
                </Backdrop>
            }
        </>
    )
}

export default HeaderPostBtn

const HeaderPostBtnContainer = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 25px;
        color: white;

        :hover {
            cursor: pointer;
            color: var(--ig-lpurple);
        }
    }
`;

