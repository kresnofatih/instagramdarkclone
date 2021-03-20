import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../Fire'
import Friend from './Friend'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function FollowList({following, followList}) {
    // backdrop
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    // data
    const [users, setUsers] = useState([])
    useEffect(()=>{
        const unsub = db.collection('users').where('email', 'in', followList?.concat(followList.length>0 ? ['']: ['display@igclone.qa'])).onSnapshot(snap=>{
            setUsers(snap.docs.map(doc=>doc.data()));
            console.log('test');
        });

        return ()=>unsub();
    }, [followList])
    return (
        <>
            <FollowListBtn onClick={handleToggle}>
                {following ? 'Following':'Followers'}
            </FollowListBtn>
            {open &&
                <Backdrop className={classes.backdrop} open={open}>
                    <FollowListContainer>
                        <FollowListContainerHead>
                            {following ? 'Following':'Followers'}
                        </FollowListContainerHead>
                        <FollowListContainerBody>
                            {users?.map(user=>(
                                <Friend
                                    key={user.email}
                                    email={user.email}
                                    displayName={user.displayName}
                                    photoURL={user.photoURL}
                                />
                            ))}
                            {users.length===0 &&
                                <p>No {following ? 'Following':'Followers'} Yet</p>
                            }
                        </FollowListContainerBody>
                        <CloseIcon onClick={handleClose}/>
                    </FollowListContainer>
                </Backdrop>
            }
        </>
    )
}

export default FollowList

const FollowListBtn = styled.label`
    display: flex;
    justify-content: center;
    font-weight: 200;
    margin-left: 5px;

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const FollowListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--ig-dgray);
    width: 350px;

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

const FollowListContainerHead = styled.div`
    flex-grow: 0;
    padding: 10px 20px;
`;

const FollowListContainerBody = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--ig-ddgray);
    
    > p {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        font-weight: 200;
        color: gray;
    }
`;