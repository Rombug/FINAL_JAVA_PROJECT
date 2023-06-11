import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    jwtToken: null
}
const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers :{
            addUser(state, {payload: user}) {
                console.log(user);
                return user;
            },
            removeUser() {
                return initialState;
            }
        }
    }
);

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;