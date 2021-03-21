import React, { useState } from 'react'
import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../features/userSlice';
import { submitEditProfile } from '../actions/SubmitProfileActions';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function EditProfile() {
    const currentUser = useSelector(getCurrentUser);
    const [seeEditProfile, setSeeEditProfile] = useState(false);
    const classes = useStyles();

    // props for editng profile
    const [tempDisplayName, setTempDisplayName] = useState(currentUser.displayName);
    const [tempBio, setTempBio] = useState(currentUser.bio);
    const [tempAvatarFile, setTempAvatarFile] = useState('');
    const [tempAvatarUrl, setTempAvatarUrl] = useState(currentUser.photoURL);
    
    const chooseImage = e =>{
        const file = e.target.files[0];
        setTempAvatarFile(file);
        setTempAvatarUrl(URL.createObjectURL(file));
    }
    return (
        <>
            <EditProfileBtn>
                <EditIcon onClick={()=>{setSeeEditProfile(true)}}/>
            </EditProfileBtn>
            {seeEditProfile && 
                <Backdrop className={classes.backdrop} open={seeEditProfile}>
                    <EditProfileContainer>
                    <label for="avaUploader">
                        <ProfileBoxAvatar 
                            src={tempAvatarUrl}
                            alt=""
                        />
                    </label>
                    <input type="file" id="avaUploader" accept='images/*' onChange={e=>chooseImage(e)}/>
                    <TextField
                        id='outlined-basic'
                        label="Display Name"
                        value={tempDisplayName}
                        error={tempDisplayName ? false : true}
                        helperText={tempDisplayName ? '': 'Minimum 6 Characters'}
                        inputProps={{maxLength: 10}}
                        onChange={e=>setTempDisplayName(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id='outlined-basic'
                        label="Bio"
                        multiline
                        value={tempBio}
                        inputProps={{maxLength: 100}}
                        onChange={e=>setTempBio(e.target.value)}
                        variant="outlined"
                    />
                    <SubmitEditBtn onClick={()=>{
                        submitEditProfile(currentUser.email, tempDisplayName, tempBio, tempAvatarFile, ()=>{setSeeEditProfile(false)});
                    }}>Submit</SubmitEditBtn>
                    </EditProfileContainer>
                </Backdrop>
            }
        </>
    )
}

export default EditProfile

const SubmitEditBtn = styled.label`
    margin-top: 25px !important;
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    font-weight: 200;
    font-size: 18px;
    border-radius: 50ch;
    padding: 10px 20px;
    
    :hover {
        cursor: pointer;
        font-style: italic;
    }
`;

const EditProfileContainer = styled.div`
    background-color: var(--ig-ddgray);
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

    > input {
        display: none;
    }

    > label {
        margin: 10px 0;

        > .MuiAvatar-root {
            height: 60px;
            width: 60px;
        }
    } 

    > .MuiTextField-root {
        margin-top: 20px;
        width: 80%;

        > .MuiFormLabel-root {
            color: gray !important;
        }

        > .MuiInputBase-root {
            color: white;

            > .MuiOutlinedInput-notchedOutline {
                border-color: var(--ig-lred);
            }
        }
        > .Mui-error {
            > .MuiOutlinedInput-notchedOutline {
                border-color: #f44336;
            }
        }
    }
`;

const EditProfileBtn = styled.label`
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > .MuiSvgIcon-root {
        font-size: 18px;
        color: var(--ig-dorange);
        
        :hover {
            cursor: pointer;
            color: var(--ig-yellow);
        }
    }
`;

const ProfileBoxAvatar = styled(Avatar)`
    :hover {
        cursor: pointer;
    }
`;