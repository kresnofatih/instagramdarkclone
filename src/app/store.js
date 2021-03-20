import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import userReducer from '../features/userSlice';
import friendReducer from '../features/friendSlice';
import postviewerReducer from '../features/postviewerSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    friend: friendReducer,
    postviewer: postviewerReducer,
  },
});
