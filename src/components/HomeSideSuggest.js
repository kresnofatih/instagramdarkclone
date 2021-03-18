import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { getCurrentUser } from '../features/userSlice';
import { db } from '../Fire';
import Friend from './Friend';

function HomeSideSuggest() {
    const currentUser = useSelector(getCurrentUser);
    const [otherUsers, setOtherUsers] = useState([]);
    useEffect(()=>{
        const followingPlusSelf = [currentUser.email].concat(currentUser.following);
        const unsub = db
        .collection('users')
        .where('email', 'not-in', followingPlusSelf)
        .limit(5)
        .onSnapshot(snap=>{
            setOtherUsers(snap.docs.map(doc=>doc.data()))
        })

        return ()=>unsub();
    })
    return (
        <HomeSideSuggestContainer>
            <HomeSideSuggestHead>
                <h3>Suggestions For You</h3>
                <p>See All</p>
            </HomeSideSuggestHead>
            {otherUsers?.map(user=>(
                <Friend
                    key={user.email}
                    email={user.email}
                    photoURL={user.photoURL}
                    displayName={user.displayName}
                />
            ))}
        </HomeSideSuggestContainer>
    )
}

export default HomeSideSuggest

const HomeSideSuggestContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

const HomeSideSuggestHead = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
        font-size: 14px;
        color: gray;
    }

    > p {
        font-size: 14px;
    }
`;