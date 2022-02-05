import { createSlice, PayloadAction, configureStore, combineReducers } from '@reduxjs/toolkit'
import apiRequest from "./service/apiRequest";

interface UserState {
    email?: string
    phonenumber?: string
    isEmail?: boolean
    accountid?: string
}
const intialUser: UserState = {
    email: '',
    phonenumber: '',
    accountid: '',
    isEmail: true
}
const userSlice = createSlice({
    name: 'counter',
    initialState: intialUser,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            async () => await apiRequest(action.payload);
            state.email = action.payload;
            state.isEmail = true;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            async () => await apiRequest(action.payload);
            state.phonenumber = action.payload
            state.isEmail = false
        },
        setAccount: (state, action: PayloadAction<any>) => {
            async () => await apiRequest(action.payload);
            state.accountid = action.payload
        }
    }
})

export const { setEmail, setPhone, setAccount } = userSlice.actions

export const rootReducer = combineReducers({
    user: userSlice.reducer
});

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})
export type RootState = ReturnType<typeof rootReducer>

