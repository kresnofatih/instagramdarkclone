import { createSlice } from '@reduxjs/toolkit'

export const postviewerSlice = createSlice({
    name: 'postviewer',
    initialState: {
        displayName: 'displayName',
        email: 'displayName@instagram.com',
        imageURL: 'https://wallpapercave.com/wp/wp6343813.jpg',
        photoURL: 'https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg',
        postDesc: 'this is a postDesc',
        postHashtags: [
            '#igclone',
            '#coolig',
            '#igdarkclone'
        ],
        postId: '928'
    },
    reducers: {
        updatePostViewerSlice: (state, action)=>{
            Object.assign(state, action.payload);
        },
        updatePostViewerDocId: (state, action)=>{
            state.email = action.payload.email;
            state.postId = action.payload.postId;
        }
    }
});

export const { updatePostViewerSlice, updatePostViewerDocId } = postviewerSlice.actions;

export const getCurrentPostViewerDocId = state => ''+state.postviewer.email+state.postviewer.postId;
export const getCurrentPostViewer = state => state.postviewer;

export default postviewerSlice.reducer;