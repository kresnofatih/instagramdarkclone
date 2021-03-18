import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import ImageIcon from '@material-ui/icons/Image';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { storeToStg, submitPostToDb } from '../actions/PostActions';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../features/userSlice';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function ConfigurePost({closeConfigurePost}) {
    const currentUser = useSelector(getCurrentUser);
    const [tempImgUrl, setTempImgUrl] = useState('');
    const [file, setFile] = useState('');
    const [tempDesc, setTempDesc] = useState('Post Description. Start Typing. Enjoy 😁!');
    const [tempHashtags, setTempHashtags] = useState('#IGclone #IGpost #instagram');
    const [tempTags, setTempTags] = useState('@fatih1st @instagramclone');

    const chooseImage = e =>{
        const file = e.target.files[0];
        setFile(file);
        setTempImgUrl(URL.createObjectURL(file));
    }

    //submitprops
    const classes = useStyles();
    const [submitPostRunning, setSubmitPostRunning] = useState(false);
    const submitPost = ()=>{
        if(file){
            setSubmitPostRunning(true);
            storeToStg(file, currentUser.email, (url)=>submitPostToDb(url, currentUser, tempDesc, tempHashtags, tempTags, ()=>{
                setSubmitPostRunning(false);
                closeConfigurePost();
            }));
        }
    }
    return (
        <ConfigurePostBox>
            <ConfigurePostImg>
                {tempImgUrl ? <img src={tempImgUrl} alt=""/> : <ImageIcon/>}
            </ConfigurePostImg>
            <ConfigurePostDetails>
                <ConfigurePostDetailsBox>
                    <h3>Create Post</h3>
                    <input type="file" id="imgUploader" accept='images/*' onChange={e=>chooseImage(e)}/>
                    <label for="imgUploader"><ImageIcon/>Choose An Image</label>
                    <CloseIcon onClick={()=>{
                        closeConfigurePost();
                        setTempImgUrl('');
                    }}/>
                    <TextField
                        id='outlined-basic'
                        multiline
                        label="Description"
                        value={tempDesc}
                        error={tempDesc ? false : true}
                        helperText={tempDesc ? '': "Cannot be empty!"}
                        inputProps={{maxLength: 100}}
                        onChange={e=>setTempDesc(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id='outlined-basic'
                        multiline
                        label="Friends Tagged"
                        value={tempTags}
                        inputProps={{maxLength: 150}}
                        onChange={e=>setTempTags(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id='outlined-basic'
                        multiline
                        label="Hashtags"
                        value={tempHashtags}
                        inputProps={{maxLength: 100}}
                        onChange={e=>setTempHashtags(e.target.value)}
                        variant="outlined"
                    />
                </ConfigurePostDetailsBox>

                <SubmitPostBtn onClick={submitPost}>
                    <SendIcon/>Submit Post
                </SubmitPostBtn>

                {submitPostRunning && 
                    <Backdrop className={classes.backdrop} open={submitPostRunning}>
                        <CircularProgress/>
                    </Backdrop>
                }
            </ConfigurePostDetails>
        </ConfigurePostBox>
    )
}

export default ConfigurePost

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
    flex-direction: column;
    justify-content: space-between;

    > .MuiBackdrop-root > .MuiCircularProgress-colorPrimary {
        color: var(--ig-lpurple);
    }

`;

const ConfigurePostDetailsBox = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;


    > input {
        display: none;
    }

    > label {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        padding-right: 15px;
        display: flex;
        align-items: center;
        background-color: var(--ig-lpurple);
        border-radius: 50ch;

        :hover {
            cursor: pointer;
        }

        > .MuiSvgIcon-root {
            margin-right: 10px;
        }
    }

    > h3 {
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: 200;
        border-bottom: 1px solid gray;
        padding: 20px 0;
        margin-bottom: 20px;
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

    > .MuiTextField-root {
        margin-top: 20px;

        > .MuiFormLabel-root {
            color: gray !important;
        }

        > .MuiInputBase-root {
            color: white;

            > .MuiOutlinedInput-notchedOutline {
                border-color: var(--ig-lpurple);
            }
        }
        > .Mui-error {
            > .MuiOutlinedInput-notchedOutline {
                border-color: #f44336;
            }
        }
    }
`;

const SubmitPostBtn = styled.label`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin-top: 20px;
    margin: 20px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    background-color: var(--ig-lpurple);
    border-radius: 50ch;

    :hover {
        cursor: pointer;
    }

    > .MuiSvgIcon-root {
        margin-right: 10px;
    }
`;