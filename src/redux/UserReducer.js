import { createSlice } from "@reduxjs/toolkit";
import UserData from "../data/data";

const initialState = {
    userList: UserData,
    user: UserData,
    team: [],
    pageNo: 0,
}

export const UserReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeuser: (state, action) => {
            if (state.userList.find((val) => { return (val.first_name.toUpperCase() === action.payload) })) {

                state.user = state.userList.filter((val) => { return (val.first_name.toUpperCase() === action.payload) })
            }
            else{
                alert('user not found')
                state.user=state.user
            }

        },
        filterusers: (state, action) => {
            state.user = action.payload

        },
        maketeam: (state, action) => {
            state.team.push(action.payload)

        },
        removefromteam: (state, action) => {
            state.team = state.team.filter(val => { return (val.id !== action.payload) })

        },
        contentOnPage: (state, action) => {

            state.pageNo = action.payload

        },
    },
})

export const { changeuser, filterusers, maketeam, removefromteam, contentOnPage } = UserReducer.actions

export default UserReducer.reducer