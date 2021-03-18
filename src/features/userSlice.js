import { createSlice } from '@reduxjs/toolkit'
import { db } from '../Fire';

export const listenToUserDataInDb = (account, updateUserSlice, initializeUserDataInDb) =>{
    if(account!=null){
        db.collection('users').doc(account.email).onSnapshot(snap=>{
            if(snap.exists){
                const userData = snap.data();
                updateUserSlice(userData);
            } else {
                const accountEmail = account.email;
                initializeUserDataInDb(accountEmail);
            }
        });
    }
}

export const initializeUserDataInDb = async(accountEmail)=>{
    await db.collection('users').doc(accountEmail).set({
        displayName: accountEmail.split('@')[0],
        email: accountEmail,
        photoURL: 'https://cobaltsettlements.com/wp-content/uploads/2019/03/blank-profile.jpg',
        numOfPosts: 0,
        numOfNotifications: 0,
        followers: [],
        following: [],
        nextId: 0,
        bio: 'I am '+accountEmail.split('@')[0]
    });
}

export const userSlice = createSlice({
    name: 'user',
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
        updateUserSlice: (state, action)=>{
            Object.assign(state, action.payload);
        }
    }
});

export const { updateUserSlice } = userSlice.actions;

export const getCurrentUser = state => state.user;
export const getCurrentUserEmail = state => state.user.email;

export default userSlice.reducer;