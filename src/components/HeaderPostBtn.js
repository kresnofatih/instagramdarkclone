import React, { useState } from 'react'
import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ImageIcon from '@material-ui/icons/Image';
import CloseIcon from '@material-ui/icons/Close';

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

    const [tempImgUrl, setTempImgUrl] = useState('');
    const chooseImage = e =>{
        const file = e.target.files[0];
        setTempImgUrl(URL.createObjectURL(file));
    }
    return (
        <>
            <HeaderPostBtnContainer>
                <Tooltip title="Post">
                    <AddAPhotoOutlinedIcon onClick={handleToggle}/>
                </Tooltip>
            </HeaderPostBtnContainer>
            <Backdrop className={classes.backdrop} open={open}>
                <ConfigurePostBox>
                    <ConfigurePostImg>
                        {tempImgUrl ? (
                            <img src={tempImgUrl} alt=""/>
                        ):(
                            <ImageIcon/>
                        )}
                    </ConfigurePostImg>
                    <ConfigurePostDetails>
                        <input type="file" id="imgUploader" onChange={e=>chooseImage(e)}/>
                        <label for="imgUploader">
                            <ImageIcon/>Choose An Image
                        </label>
                        <CloseIcon onClick={()=>{
                            handleClose();
                            setTempImgUrl('');
                        }}/>
                    </ConfigurePostDetails>
                </ConfigurePostBox>
            </Backdrop>
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

const ConfigurePostBox = styled.div`
    display: flex;
    width: 1000px;
    height: 80vh;
`;

const ConfigurePostImg = styled.div`
    flex: 0.7;
    height: 100%;
    background-color: var(--ig-dgray);

    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const ConfigurePostDetails = styled.div`
    position: relative;
    flex: 0.3;
    height: 100%;
    background-color: var(--ig-ddgray);
    display: flex;
    align-items: center;
    justify-content: center;

    > input {
        display: none;
    }

    > label {
        padding: 10px 20px;
        padding-right: 23px;
        display: flex;
        align-items: center;
        background-color: var(--ig-lpurple);
        border-radius: 50ch;

        :hover {
            cursor: pointer;
            background-color: var(--ig-purple);
        }

        > .MuiSvgIcon-root {
            margin-right: 10px;
        }
    }

    > .MuiSvgIcon-root {
        position: absolute;
        top: 10px;
        right: 10px;

        :hover {
            cursor: pointer;
            color: var(--ig-lpurple);
        }
    }
`;