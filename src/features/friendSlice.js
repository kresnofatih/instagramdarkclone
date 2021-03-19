import { createSlice } from '@reduxjs/toolkit'
import { db } from '../Fire';

export const listenToFriendDataInDb = (friendEmail, updateFriendSlice)=>{
    if(friendEmail){
        db.collection('users').doc(friendEmail).onSnapshot(snap=>{
            if(snap.exists){
                const userData = snap.data();
                updateFriendSlice(userData);
            };
        })
    }
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState: {
        displayName: 'displayName',
        email: 'displayName@instagram.co.qa',
        photoURL: 'https://cobaltsettlements.com/wp-content/uploads/2019/03/blank-profile.jpg',
        numOfPosts: 123,
        numOfNotifications: 2,
        followers: [],
        following: [],
        nextId: 34,
        bio: 'This is a sample userBio 😂'
    },
    reducers: {
        updateFriendSlice: (state, action)=>{
            Object.assign(state, action.payload);
        },
        updateFriendEmail: (state, action)=>{
            state.email = action.payload.email;
        }
    }
})

export const { updateFriendSlice, updateFriendEmail } = friendSlice.actions;

export const getCurrentFriend = state => state.friend;

export const getCurrentFriendEmail = state => state.friend.email;

export default friendSlice.reducer;