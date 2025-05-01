import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./authOperations";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user,
                    state.token = action.payload.token,
                    state.loading = false,
                    state.error = null,
                    state.isLoggedIn = true,
                    console.log("Kayıt basarılır bremın")
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })


            .addCase(login.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user,
                    state.token = action.payload.token,
                    state.isLoggedIn = true,
                    state.loading = false
        })
            .addCase(login.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
                    console.log(state.error,"hata tam burada")
            })


            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null },
                    state.token = null,
                    state.isLoggedIn = false
            })



            .addCase(refresh.pending, (state) => {
                state.isRefreshing = true
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.user = action.payload.user,
                    state.token = action.payload.token,
                    state.isLoggedIn = true,
                    state.isRefreshing = false
            })
            .addCase(refresh.rejected, (state, action) => {
                state.isRefreshing = false,
                    state.error = action.payload
            })
    }
})

export default authSlice.reducer
